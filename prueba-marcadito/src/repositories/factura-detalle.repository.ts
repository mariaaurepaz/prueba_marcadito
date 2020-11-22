import {DefaultCrudRepository} from '@loopback/repository';
import {FacturaDetalle, FacturaDetalleRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaDetalleRepository extends DefaultCrudRepository<
  FacturaDetalle,
  typeof FacturaDetalle.prototype.facturaDetalleId,
  FacturaDetalleRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(FacturaDetalle, dataSource);
  }
}
