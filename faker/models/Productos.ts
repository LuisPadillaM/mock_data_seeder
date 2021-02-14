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
                'cantidad',
                'precio'
            ],
            properties: {
                id: {
                    $ref: '#/definitions/positiveInt',
                },
                nombre: {
                    type: 'string',
                    faker: 'commerce.productName',
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
                    faker: 'commerce.productMaterial',
                },
                cantidad: {
                    type: 'string',
                    faker: 'finance.amount',
                },
                precio: {
                    type: 'string',
                    faker: 'commerce.price',
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
