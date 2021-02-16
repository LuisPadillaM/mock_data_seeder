const colaboradores = {
  id: 'colaboradores',
  type: 'array',
  minItems: 20,
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
          $ref: '#/definitions/positiveInt',
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
          items: {
            enum: [
                'certificacion 1',
                'certificacion 2',
                'certificacion 3',
            ]
          },
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
    },
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true,
    },
  },
}

export default colaboradores
