import { gql } from 'apollo-server-express/dist/index'

export const typeDefs = gql`
scalar Date

interface Vehicle {
  maxSpeed: Int
}

type Airplane implements Vehicle {
  maxSpeed: Int
  wingspan: Int
  date: Date
}

type Car implements Vehicle {
  maxSpeed: Int
  licensePlate: String
}

type Query {
  vehicle: [Vehicle]
}
`
