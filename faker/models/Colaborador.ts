const colaboradores = {
  id: 'colaboradores',
  type: 'array',
  minItems: 23,
  maxItems: 25,
  uniqueItems: true,
  items: {$ref: '#/definitions/colaboradores'},
  definitions: {
    colaboradores: {
      type: 'object',
      required: [
        'id',
        'experiencia',
        'acuerdo',
        'certificaciones',
        'nombre',
        'apellido',
        'email',
        'tel',
      ],
      properties: {
        id: {
          $ref: 'positiveInt',
        },
        experiencia:  {
          type: 'integer',
          minimum: 0,
          maximum: 40
        },
        acuerdo: {
          type: 'string',
          enum: [
              'Si',
              'No'
          ]
        },
        certificaciones: {
          type: 'string',
          enum: [
              'certificacion 1',
              'certificacion 2',
              'certificacion 3',
          ]
        },
        nombre: {
          type: 'string',
          faker: 'name.firstName',
        },
        apellido: {
          type: 'string',
          faker: 'name.lastName',
        },
        email: {
          type: 'string',
          faker: 'internet.email',
        },
        tel: {
          type: 'string',
          faker: 'phone.phoneNumber',
        }
      },
    }
  },
}

export default colaboradores
