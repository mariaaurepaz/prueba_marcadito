import {DefaultCrudRepository} from '@loopback/repository';
import {PedidoDetalle, PedidoDetalleRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PedidoDetalleRepository extends DefaultCrudRepository<
  PedidoDetalle,
  typeof PedidoDetalle.prototype.pedidoDetalleId,
  PedidoDetalleRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(PedidoDetalle, dataSource);
  }
}
