import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import { getAll, setAirplane, setCar } from '../utils/db'

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
            else if (obj.licensePlate) {
                return 'Car'
            }
        }
    },

    Query: {
        vehicle: () => {
            return getAll()
        }
    },
    Mutation: {
        setCar: async (_, req) => {
            return setCar(req.car).then(res => res.ops)
        },
        setAirplane: (_, req) => {
            return setAirplane(req.airplane).then(res => res.ops)
        }
    }
}