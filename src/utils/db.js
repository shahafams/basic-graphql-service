import { MongoClient } from 'mongodb'

let internals = {
    db: null
}

export const connect = async () => {
    if (!internals.db) {
        const client = await MongoClient.connect('mongodb://localhost:27017/db')
        internals.client = client
        internals.db = client.db('db')

    }
    return internals.db
}

export const getAll = () => {
    return internals.db
}
