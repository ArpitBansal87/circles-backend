import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UrlObject extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  full: String
}

@model({settings: {strict: false}})
export class Images extends Entity {

  @property({
    type: 'number',
    generated: true,
    id: true,
  })
  id: number;

  @property({
    type: 'number',
    default: 0,
  })
  downloads?: number;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: UrlObject,
    required: true,
  })
  urls: UrlObject;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Images>) {
    super(data);
  }
}

export interface ImagesRelations {
  // describe navigational properties here
}

export type ImagesWithRelations = Images & ImagesRelations;
