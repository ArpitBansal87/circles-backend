import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AdminDbDataSource} from '../datasources';
import {UserDetails, UserDetailsRelations} from '../models';

export class UserDetailsRepository extends DefaultCrudRepository<
  UserDetails,
  typeof UserDetails.prototype.id,
  UserDetailsRelations
> {
  constructor(
    @inject('datasources.adminDb') dataSource: AdminDbDataSource,
  ) {
    super(UserDetails, dataSource);
  }
}
