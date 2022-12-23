import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UserDetails} from '../models';
import {UserDetailsRepository} from '../repositories';

export class UserDetailsController {
  constructor(
    @repository(UserDetailsRepository)
    public userDetailsRepository : UserDetailsRepository,
  ) {}

  @post('/user-details')
  @response(200, {
    description: 'UserDetails model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserDetails)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDetails, {
            title: 'NewUserDetails',
            exclude: ['id'],
          }),
        },
      },
    })
    userDetails: Omit<UserDetails, 'id'>,
  ): Promise<UserDetails> {
    return this.userDetailsRepository.create(userDetails);
  }

  @get('/user-details/count')
  @response(200, {
    description: 'UserDetails model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserDetails) where?: Where<UserDetails>,
  ): Promise<Count> {
    return this.userDetailsRepository.count(where);
  }

  @get('/user-details')
  @response(200, {
    description: 'Array of UserDetails model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserDetails, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserDetails) filter?: Filter<UserDetails>,
  ): Promise<UserDetails[]> {
    return this.userDetailsRepository.find(filter);
  }

  @patch('/user-details')
  @response(200, {
    description: 'UserDetails PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDetails, {partial: true}),
        },
      },
    })
    userDetails: UserDetails,
    @param.where(UserDetails) where?: Where<UserDetails>,
  ): Promise<Count> {
    return this.userDetailsRepository.updateAll(userDetails, where);
  }

  @get('/user-details/{id}')
  @response(200, {
    description: 'UserDetails model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserDetails, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserDetails, {exclude: 'where'}) filter?: FilterExcludingWhere<UserDetails>
  ): Promise<UserDetails> {
    return this.userDetailsRepository.findById(id, filter);
  }

  @patch('/user-details/{id}')
  @response(204, {
    description: 'UserDetails PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserDetails, {partial: true}),
        },
      },
    })
    userDetails: UserDetails,
  ): Promise<void> {
    await this.userDetailsRepository.updateById(id, userDetails);
  }

  @put('/user-details/{id}')
  @response(204, {
    description: 'UserDetails PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userDetails: UserDetails,
  ): Promise<void> {
    await this.userDetailsRepository.replaceById(id, userDetails);
  }

  @del('/user-details/{id}')
  @response(204, {
    description: 'UserDetails DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userDetailsRepository.deleteById(id);
  }
}
