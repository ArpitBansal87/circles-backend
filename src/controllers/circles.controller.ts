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
import {Circles} from '../models';
import {CirclesRepository} from '../repositories';

export class CirclesController {
  constructor(
    @repository(CirclesRepository)
    public circlesRepository : CirclesRepository,
  ) {}

  @post('/circles')
  @response(200, {
    description: 'Circles model instance',
    content: {'application/json': {schema: getModelSchemaRef(Circles)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Circles, {
            title: 'NewCircles',
            exclude: ['id'],
          }),
        },
      },
    })
    circles: Omit<Circles, 'id'>,
  ): Promise<Circles> {
    return this.circlesRepository.create(circles);
  }

  @get('/circles/count')
  @response(200, {
    description: 'Circles model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Circles) where?: Where<Circles>,
  ): Promise<Count> {
    return this.circlesRepository.count(where);
  }

  @get('/circles')
  @response(200, {
    description: 'Array of Circles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Circles, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Circles) filter?: Filter<Circles>,
  ): Promise<Circles[]> {
    return this.circlesRepository.find(filter);
  }

  @patch('/circles')
  @response(200, {
    description: 'Circles PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Circles, {partial: true}),
        },
      },
    })
    circles: Circles,
    @param.where(Circles) where?: Where<Circles>,
  ): Promise<Count> {
    return this.circlesRepository.updateAll(circles, where);
  }

  @get('/circles/{id}')
  @response(200, {
    description: 'Circles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Circles, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Circles, {exclude: 'where'}) filter?: FilterExcludingWhere<Circles>
  ): Promise<Circles> {
    return this.circlesRepository.findById(id, filter);
  }

  @patch('/circles/{id}')
  @response(204, {
    description: 'Circles PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Circles, {partial: true}),
        },
      },
    })
    circles: Circles,
  ): Promise<void> {
    await this.circlesRepository.updateById(id, circles);
  }

  @put('/circles/{id}')
  @response(204, {
    description: 'Circles PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() circles: Circles,
  ): Promise<void> {
    await this.circlesRepository.replaceById(id, circles);
  }

  @del('/circles/{id}')
  @response(204, {
    description: 'Circles DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.circlesRepository.deleteById(id);
  }
}
