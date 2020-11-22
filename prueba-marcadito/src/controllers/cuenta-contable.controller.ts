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
import {CuentaContable} from '../models';
import {CuentaContableRepository} from '../repositories';

export class CuentaContableController {
  constructor(
    @repository(CuentaContableRepository)
    public cuentaContableRepository : CuentaContableRepository,
  ) {}

  @post('/cuenta-contables', {
    responses: {
      '200': {
        description: 'CuentaContable model instance',
        content: {'application/json': {schema: getModelSchemaRef(CuentaContable)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuentaContable, {
            title: 'NewCuentaContable',
            
          }),
        },
      },
    })
    cuentaContable: CuentaContable,
  ): Promise<CuentaContable> {
    return this.cuentaContableRepository.create(cuentaContable);
  }

  @get('/cuenta-contables/count', {
    responses: {
      '200': {
        description: 'CuentaContable model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CuentaContable) where?: Where<CuentaContable>,
  ): Promise<Count> {
    return this.cuentaContableRepository.count(where);
  }

  @get('/cuenta-contables', {
    responses: {
      '200': {
        description: 'Array of CuentaContable model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CuentaContable, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CuentaContable) filter?: Filter<CuentaContable>,
  ): Promise<CuentaContable[]> {
    return this.cuentaContableRepository.find(filter);
  }

  @patch('/cuenta-contables', {
    responses: {
      '200': {
        description: 'CuentaContable PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuentaContable, {partial: true}),
        },
      },
    })
    cuentaContable: CuentaContable,
    @param.where(CuentaContable) where?: Where<CuentaContable>,
  ): Promise<Count> {
    return this.cuentaContableRepository.updateAll(cuentaContable, where);
  }

  @get('/cuenta-contables/{id}', {
    responses: {
      '200': {
        description: 'CuentaContable model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CuentaContable, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CuentaContable, {exclude: 'where'}) filter?: FilterExcludingWhere<CuentaContable>
  ): Promise<CuentaContable> {
    return this.cuentaContableRepository.findById(id, filter);
  }

  @patch('/cuenta-contables/{id}', {
    responses: {
      '204': {
        description: 'CuentaContable PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CuentaContable, {partial: true}),
        },
      },
    })
    cuentaContable: CuentaContable,
  ): Promise<void> {
    await this.cuentaContableRepository.updateById(id, cuentaContable);
  }

  @put('/cuenta-contables/{id}', {
    responses: {
      '204': {
        description: 'CuentaContable PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cuentaContable: CuentaContable,
  ): Promise<void> {
    await this.cuentaContableRepository.replaceById(id, cuentaContable);
  }

  @del('/cuenta-contables/{id}', {
    responses: {
      '204': {
        description: 'CuentaContable DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cuentaContableRepository.deleteById(id);
  }
}
