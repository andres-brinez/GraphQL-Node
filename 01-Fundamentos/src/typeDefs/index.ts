// por estandar se llama typeDefs, esto es lo que se le manda a apollo server

/* Definición del Schema (typeDefs): Se define la estructura de los datos usando GraphQL Schema Language. Aquí se declaran dos tipos:
  User: Representa un usuario con campos 'name' y 'email'.
  Query: Define las consultas disponibles, en este caso 'users'.
 */
export const typeDefs = `#graphql 

 
  type User{
    name: String
    email: String
    role:Role
  }

  input UserID{
    id: ID!
  } 

  input CreateUserInput{
    name: String
    email: String
    role: String
  }

  type Role{
    name: string
  }

  type Query{
    users: [User]
    user : User
    getUserById(id: UserID!): [User]
    
  }

`;