const colaboradores = {
  id: 'colaboradores',
  type: 'array',
  minItems: 21,
  maxItems: 21,
  uniqueItems: true,
  items: {$ref: '#/definitions/colaboradores'},
  definitions: {
    colaboradores: {
      type: 'object',
      required: [
        'id',
        'experiencia',
        'nombre',
        'apellido',
        'email',
        'tel',
        'test'
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
        nombre: {
          type: 'string',
          faker: 'name.firstName',
        },
        apellido: {
          type: 'string',
          faker:'custom.fullName'
        },
        email: {
          type: 'string',
          faker: 'internet.email',
        },
        tel: {
          type: 'string',
          faker: {
            'phone.phoneNumber': ['####-##-##']
          },
        }
      },
    }
  },
}

export default colaboradores
