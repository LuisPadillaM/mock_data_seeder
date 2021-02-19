const productos = {
    id: 'productos',
    type: 'array',
    maxItems: 10,
    uniqueItems: true,
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
                    $ref: 'positiveInt',
                },
                nombre: {
                    type: 'string',
                    enum: [
                        'Rosas',
                        'Girasoles',
                        'Crisantemos',
                        'Aglonemas',
                        'Begonias',
                        'Cóleos',
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
        }
    },
}

export default productos
