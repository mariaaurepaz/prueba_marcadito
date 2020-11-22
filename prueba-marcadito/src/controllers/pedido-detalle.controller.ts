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
import {PedidoDetalle} from '../models';
import {PedidoDetalleRepository} from '../repositories';

export class PedidoDetalleController {
  constructor(
    @repository(PedidoDetalleRepository)
    public pedidoDetalleRepository : PedidoDetalleRepository,
  ) {}

  @post('/pedido-detalles', {
    responses: {
      '200': {
        description: 'PedidoDetalle model instance',
        content: {'application/json': {schema: getModelSchemaRef(PedidoDetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PedidoDetalle, {
            title: 'NewPedidoDetalle',
            
          }),
        },
      },
    })
    pedidoDetalle: PedidoDetalle,
  ): Promise<PedidoDetalle> {
    return this.pedidoDetalleRepository.create(pedidoDetalle);
  }

  @get('/pedido-detalles/count', {
    responses: {
      '200': {
        description: 'PedidoDetalle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PedidoDetalle) where?: Where<PedidoDetalle>,
  ): Promise<Count> {
    return this.pedidoDetalleRepository.count(where);
  }

  @get('/pedido-detalles', {
    responses: {
      '200': {
        description: 'Array of PedidoDetalle model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PedidoDetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PedidoDetalle) filter?: Filter<PedidoDetalle>,
  ): Promise<PedidoDetalle[]> {
    return this.pedidoDetalleRepository.find(filter);
  }

  @patch('/pedido-detalles', {
    responses: {
      '200': {
        description: 'PedidoDetalle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PedidoDetalle, {partial: true}),
        },
      },
    })
    pedidoDetalle: PedidoDetalle,
    @param.where(PedidoDetalle) where?: Where<PedidoDetalle>,
  ): Promise<Count> {
    return this.pedidoDetalleRepository.updateAll(pedidoDetalle, where);
  }

  @get('/pedido-detalles/{id}', {
    responses: {
      '200': {
        description: 'PedidoDetalle model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PedidoDetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PedidoDetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<PedidoDetalle>
  ): Promise<PedidoDetalle> {
    return this.pedidoDetalleRepository.findById(id, filter);
  }

  @patch('/pedido-detalles/{id}', {
    responses: {
      '204': {
        description: 'PedidoDetalle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PedidoDetalle, {partial: true}),
        },
      },
    })
    pedidoDetalle: PedidoDetalle,
  ): Promise<void> {
    await this.pedidoDetalleRepository.updateById(id, pedidoDetalle);
  }

  @put('/pedido-detalles/{id}', {
    responses: {
      '204': {
        description: 'PedidoDetalle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pedidoDetalle: PedidoDetalle,
  ): Promise<void> {
    await this.pedidoDetalleRepository.replaceById(id, pedidoDetalle);
  }

  @del('/pedido-detalles/{id}', {
    responses: {
      '204': {
        description: 'PedidoDetalle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pedidoDetalleRepository.deleteById(id);
  }
}
