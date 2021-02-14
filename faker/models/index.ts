import colaboradores from './Colaborador'
import clientes from './Clientes'
import productos from './Productos'

const composedSchema = {
    type: 'object',
    properties: {
        clientes: {
            $ref: 'clientes'
        },
        colaboradores: {
            $ref: 'colaboradores'
        },
        productos: {
            $ref: 'productos'
        },
    },
    definitions: {
        positiveInt: {
            type: 'integer',
            minimum: 0,
            exclusiveMinimum: true
        }
    },
}

export const models = [
    colaboradores, clientes, productos
]

export default composedSchema
