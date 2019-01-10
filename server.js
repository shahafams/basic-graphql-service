import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './src/typeDefs/typeDefs'
import { resolvers } from './src/resolvers/resolvers'
import { connect } from './src/utils/db'

export const init = async() => {
    await initConnections()

    return await initServer()
}

const initServer  = async() => {
    const server = new ApolloServer({ typeDefs, resolvers })
    const path = '/graphql'

    const app = express()
    server.applyMiddleware({ app, path })

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    )
}

const initConnections = async() => {
    await connect()
}

export default {
    init
}
