import {Entity, model, property} from '@loopback/repository';

@model()
export class Circles extends Entity {
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
  name: string;

  @property({
    type: 'number',
    default: 10,
  })
  maxCount?: number;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;


  constructor(data?: Partial<Circles>) {
    super(data);
  }
}

export interface CirclesRelations {
  // describe navigational properties here
}

export type CirclesWithRelations = Circles & CirclesRelations;
