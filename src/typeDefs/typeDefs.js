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

input CarInput{
  maxSpeed: Int
  licensePlate: String
}

input AirplaneInput{
  maxSpeed: Int
  wingspan: Int
  date: Date
}

type Query {
  vehicle: [Vehicle]
}

type Mutation {
    setCar(car: CarInput): [Car]
    setAirplane(airplane: AirplaneInput): Vehicle
}
`
