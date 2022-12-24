import {LifeCycleObserver, inject, lifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AdminDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'adminDb';

  constructor(
    @inject('datasources.config.adminDb', {optional: true})
    dsConfig: Object,
  ) {
    console.log('inside the db details =>', dsConfig)
    super(dsConfig);
  }
}
