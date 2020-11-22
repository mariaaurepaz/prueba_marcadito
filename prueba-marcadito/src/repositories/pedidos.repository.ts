import {DefaultCrudRepository} from '@loopback/repository';
import {Pedidos, PedidosRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PedidosRepository extends DefaultCrudRepository<
  Pedidos,
  typeof Pedidos.prototype.pedidoId,
  PedidosRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(Pedidos, dataSource);
  }
}
