// Definir lo minimo necesario para que GraphQL pueda funcionar
// GraphQL nos pide dos cosas para crear la api de GraphQL

// Tipo Query, se debe definir el tipado
// por estandar se llama typeDefs, esto es lo que se le manda a apollo server
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
const users =[
  {
    name:"Andres",
    email:"andres@gmail.com",

  },
  {
    name:"Felipe",
    email:"felipe@gmail.com",

  },
  {
    name:"Briñez",
    email:"briñez@gmail.com",

  },

]

// Resolver
const resolvers={
  Query:{
    users:()=>users[0],
  }
}