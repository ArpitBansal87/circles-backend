import * as applicationConfig from '../conf/application.json';
import {DatabaseConfigs} from './DatabseConfigs';

export class Configuration {
  private readonly _databaseConfigs: DatabaseConfigs[];
  constructor() {
    this._databaseConfigs = [
      this.generateDbConfig(applicationConfig.AdminDbDataSource)
    ]
  }
  // eslint-disable-next-line
  private generateDbConfig(dbConfig: any): DatabaseConfigs {
    const {
      name,
      connector,
      url,
      host,
      port,
      user,
      password,
      database,
      useNewUrlParser
    } = dbConfig;
    return new DatabaseConfigs(name,
      connector,
      url,
      host,
      port,
      user,
      password,
      database,
      useNewUrlParser)
  }
}
