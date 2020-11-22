import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbo_Mercadito',
  connector: 'mssql',
  url: 'mssql://Jared:123soleado@DESKTOP-K9PGG23/Mercado',
  host: 'DESKTOP-K9PGG23',
  port: 1433,
  user: 'Jared',
  password: '123soleado',
  database: 'Mercado'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DboMercaditoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbo_Mercadito';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbo_Mercadito', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
