// Definir lo minimo necesario para que GraphQL pueda funcionar
// GraphQL nos pide dos cosas para crear la api de GraphQL

// Tipo Query, se debe definir el tipado
// por estandar se llama typeDefs, esto es lo que se le manda a apollo server

/* Definición del Schema (typeDefs): Se define la estructura de los datos usando GraphQL Schema Language. Aquí se declaran dos tipos:
  User: Representa un usuario con campos 'name' y 'email'.
  Query: Define las consultas disponibles, en este caso 'users'.
 */
const typeDefs = `#graphql 

  type User{
    name: String
    email: String
  }

  type Query{
    users: User
  }

`;

// DataSet, fuente de informacion que se puede recibir de una base de datos
// Datos de muestra (users): Se crea un array con datos de usuario para simular una fuente de datos
const users = [
  {
    name: "Andres",
    email: "andres@gmail.com",

  },
  {
    name: "Felipe",
    email: "felipe@gmail.com",

  },
  {
    name: "Briñez",
    email: "briñez@gmail.com",

  },

]

// Resolvers: Funciones que determinan cómo se obtienen los datos para cada campo.
// Se define cómo se resuelven las consultas. En este caso, la consulta 'users' devuelve el primer usuario del array.
const resolvers = {
  Query: {
    users: () => users[0],
  }
}