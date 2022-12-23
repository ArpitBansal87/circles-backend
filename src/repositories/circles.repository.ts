import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AdminDbDataSource} from '../datasources';
import {Circles, CirclesRelations} from '../models';

export class CirclesRepository extends DefaultCrudRepository<
  Circles,
  typeof Circles.prototype.id,
  CirclesRelations
> {
  constructor(
    @inject('datasources.adminDb') dataSource: AdminDbDataSource,
  ) {
    super(Circles, dataSource);
  }
}
