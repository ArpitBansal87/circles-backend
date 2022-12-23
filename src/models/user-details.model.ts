import {Entity, model, property} from '@loopback/repository';

@model()
export class UserDetails extends Entity {
  @property({
    type: 'string',
    id: true,
    mongodb: {dataType: 'ObjectId'}
  })
  id: string;
  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
  })
  middleName?: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'number',
    required: true,
  })
  phone: number;


  constructor(data?: Partial<UserDetails>) {
    super(data);
  }
}

export interface UserDetailsRelations {
  // describe navigational properties here
}

export type UserDetailsWithRelations = UserDetails & UserDetailsRelations;
