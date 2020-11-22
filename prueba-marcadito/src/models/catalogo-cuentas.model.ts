import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'CatalogoCuentas'}}
})
export class CatalogoCuentas extends Entity {
  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'cuenta_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  cuentaId?: number;

  @property({
    type: 'string',
    required: false,
    length: 100,
    mssql: {columnName: 'cuenta', dataType: 'nvarchar', dataLength: 100, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  cuenta?: string;

  @property({
    type: 'number',
    required: false,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'saldo', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  saldo?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CatalogoCuentas>) {
    super(data);
  }
}

export interface CatalogoCuentasRelations {
  // describe navigational properties here
}

export type CatalogoCuentasWithRelations = CatalogoCuentas & CatalogoCuentasRelations;
