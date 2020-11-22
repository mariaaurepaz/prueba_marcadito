import {DefaultCrudRepository} from '@loopback/repository';
import {InformarcionGeneral, InformarcionGeneralRelations} from '../models';
import {DboMercaditoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InformarcionGeneralRepository extends DefaultCrudRepository<
  InformarcionGeneral,
  typeof InformarcionGeneral.prototype.informarcionGeneralId,
  InformarcionGeneralRelations
> {
  constructor(
    @inject('datasources.dbo_Mercadito') dataSource: DboMercaditoDataSource,
  ) {
    super(InformarcionGeneral, dataSource);
  }
}
