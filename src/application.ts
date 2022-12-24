import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent, UserServiceBindings
} from '@loopback/authentication-jwt';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import * as dotenv from 'dotenv';
import path from 'path';
import {AdminDbDataSource} from './datasources';
import {MySequence} from './sequence';

dotenv.config();
export {ApplicationConfig};
export class VoterAppBackendApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
    this.bind('datasources.config.adminDb').to({
      "name": process.env.ADMIN_DB_NAME,
      "connector": "mongodb",
      "url": process.env.MONGO_DB_ADMIN_URL,
      "host": "",
      "port": 0,
      "user": "",
      "password": "",
      "database": process.env.DATABASE_NAME,
      "useNewUrlParser": true
    });
    // Mount authentication system
    this.component(AuthenticationComponent);
    // Mount jwt component
    this.component(JWTAuthenticationComponent);
    // Bind datasource
    this.dataSource(AdminDbDataSource, UserServiceBindings.DATASOURCE_NAME);
  }
}
