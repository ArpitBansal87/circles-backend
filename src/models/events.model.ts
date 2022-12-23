import {Entity, model, property} from '@loopback/repository';

@model()
export class Events extends Entity {
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
    type: 'date',
    required: true,
  })
  heldOn: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @property({
    type: 'date',
  })
  updatedAt?: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'string',
    required: true,
  })
  updatedBy: string;

  @property({
    type: 'number',
    required: true,
  })
  maxAttendCount: number;

  @property({
    type: 'geopoint',
  })
  location?: string;


  constructor(data?: Partial<Events>) {
    super(data);
  }
}

export interface EventsRelations {
  // describe navigational properties here
}

export type EventsWithRelations = Events & EventsRelations;
