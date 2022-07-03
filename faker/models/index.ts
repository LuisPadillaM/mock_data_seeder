import colaboradores from './Colaborador'
import clientes from './Clientes'
import productos from './Productos'
import id from './id'


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
}

export const models = [
    colaboradores, clientes, productos, id
]

export default composedSchema
