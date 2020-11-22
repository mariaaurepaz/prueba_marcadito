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
import {InformarcionGeneral} from '../models';
import {InformarcionGeneralRepository} from '../repositories';

export class InfoGeneralController {
  constructor(
    @repository(InformarcionGeneralRepository)
    public informarcionGeneralRepository : InformarcionGeneralRepository,
  ) {}

  @post('/informarcion-generals', {
    responses: {
      '200': {
        description: 'InformarcionGeneral model instance',
        content: {'application/json': {schema: getModelSchemaRef(InformarcionGeneral)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformarcionGeneral, {
            title: 'NewInformarcionGeneral',
            
          }),
        },
      },
    })
    informarcionGeneral: InformarcionGeneral,
  ): Promise<InformarcionGeneral> {
    return this.informarcionGeneralRepository.create(informarcionGeneral);
  }

  @get('/informarcion-generals/count', {
    responses: {
      '200': {
        description: 'InformarcionGeneral model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(InformarcionGeneral) where?: Where<InformarcionGeneral>,
  ): Promise<Count> {
    return this.informarcionGeneralRepository.count(where);
  }

  @get('/informarcion-generals', {
    responses: {
      '200': {
        description: 'Array of InformarcionGeneral model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(InformarcionGeneral, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(InformarcionGeneral) filter?: Filter<InformarcionGeneral>,
  ): Promise<InformarcionGeneral[]> {
    return this.informarcionGeneralRepository.find(filter);
  }

  @patch('/informarcion-generals', {
    responses: {
      '200': {
        description: 'InformarcionGeneral PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformarcionGeneral, {partial: true}),
        },
      },
    })
    informarcionGeneral: InformarcionGeneral,
    @param.where(InformarcionGeneral) where?: Where<InformarcionGeneral>,
  ): Promise<Count> {
    return this.informarcionGeneralRepository.updateAll(informarcionGeneral, where);
  }

  @get('/informarcion-generals/{id}', {
    responses: {
      '200': {
        description: 'InformarcionGeneral model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InformarcionGeneral, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InformarcionGeneral, {exclude: 'where'}) filter?: FilterExcludingWhere<InformarcionGeneral>
  ): Promise<InformarcionGeneral> {
    return this.informarcionGeneralRepository.findById(id, filter);
  }

  @patch('/informarcion-generals/{id}', {
    responses: {
      '204': {
        description: 'InformarcionGeneral PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InformarcionGeneral, {partial: true}),
        },
      },
    })
    informarcionGeneral: InformarcionGeneral,
  ): Promise<void> {
    await this.informarcionGeneralRepository.updateById(id, informarcionGeneral);
  }

  @put('/informarcion-generals/{id}', {
    responses: {
      '204': {
        description: 'InformarcionGeneral PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() informarcionGeneral: InformarcionGeneral,
  ): Promise<void> {
    await this.informarcionGeneralRepository.replaceById(id, informarcionGeneral);
  }

  @del('/informarcion-generals/{id}', {
    responses: {
      '204': {
        description: 'InformarcionGeneral DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.informarcionGeneralRepository.deleteById(id);
  }
}