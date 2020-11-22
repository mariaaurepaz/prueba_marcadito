import {DefaultCrudRepository} from '@loopback/repository';
import {Pago, PagoRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagoRepository extends DefaultCrudRepository<
  Pago,
  typeof Pago.prototype.pagoId,
  PagoRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(Pago, dataSource);
  }
}
