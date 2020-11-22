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
import {CatalogoCuentas} from '../models';
import {CatalogoCuentasRepository} from '../repositories';


export class CatalogoCuentasController {
 constructor(
    @repository(CatalogoCuentasRepository)
    public catalogoCuentasRepository : CatalogoCuentasRepository,
  ) {}

  @post('/catalogo-cuentas', {
    responses: {
      '200': {
        description: 'CatalogoCuentas model instance',
        content: {'application/json': {schema: getModelSchemaRef(CatalogoCuentas)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CatalogoCuentas, {
            title: 'NewCatalogoCuentas',
            
          }),
        },
      },
    })
    catalogoCuentas: CatalogoCuentas,
  ): Promise<CatalogoCuentas> {
    return this.catalogoCuentasRepository.create(catalogoCuentas);
  }

  @get('/catalogo-cuentas/count', {
    responses: {
      '200': {
        description: 'CatalogoCuentas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(CatalogoCuentas) where?: Where<CatalogoCuentas>,
  ): Promise<Count> {
    return this.catalogoCuentasRepository.count(where);
  }

  @get('/catalogo-cuentas', {
    responses: {
      '200': {
        description: 'Array of CatalogoCuentas model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(CatalogoCuentas, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(CatalogoCuentas) filter?: Filter<CatalogoCuentas>,
  ): Promise<CatalogoCuentas[]> {
    return this.catalogoCuentasRepository.find(filter);
  }

  @patch('/catalogo-cuentas', {
    responses: {
      '200': {
        description: 'CatalogoCuentas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CatalogoCuentas, {partial: true}),
        },
      },
    })
    catalogoCuentas: CatalogoCuentas,
    @param.where(CatalogoCuentas) where?: Where<CatalogoCuentas>,
  ): Promise<Count> {
    return this.catalogoCuentasRepository.updateAll(catalogoCuentas, where);
  }

  @get('/catalogo-cuentas/{id}', {
    responses: {
      '200': {
        description: 'CatalogoCuentas model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CatalogoCuentas, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CatalogoCuentas, {exclude: 'where'}) filter?: FilterExcludingWhere<CatalogoCuentas>
  ): Promise<CatalogoCuentas> {
    return this.catalogoCuentasRepository.findById(id, filter);
  }

  @patch('/catalogo-cuentas/{id}', {
    responses: {
      '204': {
        description: 'CatalogoCuentas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CatalogoCuentas, {partial: true}),
        },
      },
    })
    catalogoCuentas: CatalogoCuentas,
  ): Promise<void> {
    await this.catalogoCuentasRepository.updateById(id, catalogoCuentas);
  }

  @put('/catalogo-cuentas/{id}', {
    responses: {
      '204': {
        description: 'CatalogoCuentas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() catalogoCuentas: CatalogoCuentas,
  ): Promise<void> {
    await this.catalogoCuentasRepository.replaceById(id, catalogoCuentas);
  }

  @del('/catalogo-cuentas/{id}', {
    responses: {
      '204': {
        description: 'CatalogoCuentas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.catalogoCuentasRepository.deleteById(id);
  }
}