const clientes = {
    id: 'clientes',
    type: 'array',
    minItems: 20,
    items: {$ref: '#/definitions/clientes'},
    definitions: {
        clientes: {
            type: 'object',
            required: [
                'id',
                'nombre',
                'apellido',
                'email',
                'tel',
                'pais'
            ],
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt',
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
                },
                pais: {
                    type: 'string',
                    enum: [
                        'Costa Rica',
                        'Francia',
                        'Alemania',
                        'España',
                        'Bélgica',
                        'Reino Unido'
                    ]
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

export default clientes
