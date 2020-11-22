import {DefaultCrudRepository} from '@loopback/repository';
import {CatalogoCuentas, CatalogoCuentasRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CatalogoCuentasRepository extends DefaultCrudRepository<
  CatalogoCuentas,
  typeof CatalogoCuentas.prototype.cuentaId,
  CatalogoCuentasRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(CatalogoCuentas, dataSource);
  }
}
