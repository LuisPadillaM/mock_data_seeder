const productos = {
    id: 'productos',
    type: 'array',
    minItems: 20,
    items: {$ref: '#/definitions/productos'},
    definitions: {
        productos: {
            type: 'object',
            required: [
                'id',
                'nombre',
                'descripcion',
                'imagen',
                'tipo',
                'floración',
                'cantidad',
                'precio'
            ],
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt',
                },
                nombre: {
                    type: 'string',
                    enum: [
                        'producto 1',
                        'producto 2',
                        'producto 3',
                        'producto 4',
                        'producto 5',
                        'producto 6',
                    ],
                },
                descripcion: {
                    type: 'string',
                    faker: 'commerce.productDescription',
                },
                imagen: {
                    type: 'string',
                    faker: 'image.nature',
                },
                tipo: {
                    type: 'string',
                    enum : [
                        'flor',
                        'follaje',
                    ]
                },
                floracion: {
                    type: 'integer',
                    minimum: 7,
                    maximum: 70
                },
                cantidad: {
                    type: 'integer',
                    minimum: 1,
                    maximum: 100
                },
                precio: {
                    type: 'string',
                    faker: {
                        'commerce.price': [100, 10000, 2, '$'],
                    },
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

export default productos
