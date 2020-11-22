// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {FacturaDetalle} from '../models';
import {FacturaDetalleRepository} from '../repositories';

export class FacturaDetalleController {
  constructor(
    @repository(FacturaDetalleRepository)
    public facturaDetalleRepository : FacturaDetalleRepository,
  ) {}

  @post('/factura-detalles', {
    responses: {
      '200': {
        description: 'FacturaDetalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(FacturaDetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaDetalle, {
            title: 'NewFacturaDetalle',
            
          }),
        },
      },
    })
    facturaDetalle: FacturaDetalle,
  ): Promise<FacturaDetalle> {
    return this.facturaDetalleRepository.create(facturaDetalle);
  }

  @get('/factura-detalles/count', {
    responses: {
      '200': {
        description: 'FacturaDetalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FacturaDetalle) where?: Where<FacturaDetalle>,
  ): Promise<Count> {
    return this.facturaDetalleRepository.count(where);
  }

  @get('/factura-detalles', {
    responses: {
      '200': {
        description: 'Array of FacturaDetalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FacturaDetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FacturaDetalle) filter?: Filter<FacturaDetalle>,
  ): Promise<FacturaDetalle[]> {
    return this.facturaDetalleRepository.find(filter);
  }

  @patch('/factura-detalles', {
    responses: {
      '200': {
        description: 'FacturaDetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaDetalle, {partial: true}),
        },
      },
    })
    facturaDetalle: FacturaDetalle,
    @param.where(FacturaDetalle) where?: Where<FacturaDetalle>,
  ): Promise<Count> {
    return this.facturaDetalleRepository.updateAll(facturaDetalle, where);
  }

  @get('/factura-detalles/{id}', {
    responses: {
      '200': {
        description: 'FacturaDetalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FacturaDetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FacturaDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<FacturaDetalle>
  ): Promise<FacturaDetalle> {
    return this.facturaDetalleRepository.findById(id, filter);
  }

  @patch('/factura-detalles/{id}', {
    responses: {
      '204': {
        description: 'FacturaDetalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FacturaDetalle, {partial: true}),
        },
      },
    })
    facturaDetalle: FacturaDetalle,
  ): Promise<void> {
    await this.facturaDetalleRepository.updateById(id, facturaDetalle);
  }

  @put('/factura-detalles/{id}', {
    responses: {
      '204': {
        description: 'FacturaDetalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() facturaDetalle: FacturaDetalle,
  ): Promise<void> {
    await this.facturaDetalleRepository.replaceById(id, facturaDetalle);
  }

  @del('/factura-detalles/{id}', {
    responses: {
      '204': {
        description: 'FacturaDetalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturaDetalleRepository.deleteById(id);
  }
}
