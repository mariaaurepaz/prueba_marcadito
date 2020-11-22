import {DefaultCrudRepository} from '@loopback/repository';
import {CuentaContable, CuentaContableRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CuentaContableRepository extends DefaultCrudRepository<
  CuentaContable,
  typeof CuentaContable.prototype.cuentaContableId,
  CuentaContableRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(CuentaContable, dataSource);
  }
}
