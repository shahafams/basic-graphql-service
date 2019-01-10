import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import { getAll } from '../utils/db'

export const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value) // value from the client
        },
        serialize(value) {
            return value.getTime() // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                return parseInt(ast.value, 10) // ast value is always in string format
            }
            return null
        },
    }),
    Vehicle: {
        __resolveType(obj, context, info) {
            if (obj.wingspan) {
                return 'Airplane'
            }

            if (obj.licensePlate) {
                return 'Car'
            }
        }
    },

    Query: {
        vehicle: () => {
            return new Promise(function (resolve, reject) {
                getAll()
                resolve(getAll())
            })
        }
    }
}