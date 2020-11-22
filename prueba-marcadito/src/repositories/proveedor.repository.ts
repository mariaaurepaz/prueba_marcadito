import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedor, ProveedorRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.proveedorId,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
