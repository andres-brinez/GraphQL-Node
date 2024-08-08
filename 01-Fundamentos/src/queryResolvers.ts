// Definir lo minimo necesario para que GraphQL pueda funcionar
// GraphQL nos pide dos cosas para crear la api de GraphQL

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


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

// DataSet, fuente de informacion que se puede recibir de una base de datos
// Datos de muestra (users): Se crea un array con datos de usuario para simular una fuente de datos
const users = [
  {
    name: "Andres",
    email: "andres@gmail.com",
    role:{
      name: "Administrator"
    }

  },
  {
    name: "Felipe",
    email: "felipe@gmail.com",
    role:{
      name: "Administrator"
    }

  },
  {
    name: "Briñez",
    email: "briñez@gmail.com",
    role:{
      name:"User"
    }

  },

]

// Resolvers: Funciones que determinan cómo se obtienen los datos para cada campo.
// Se define cómo se resuelven las consultas. En este caso, la consulta 'users' devuelve el primer usuario del array.
const resolvers = {
  Query: {
    users: () => users,
    user: ()=> users[0],
    getUserById: (parent,args,context,info)=>{
      console.log(args);
      const {id}= args.id
      return users.filter(user=> user.email === id)
    }

  }
}

//Es una práctica recomendada y una convención en GraphQL que el nombre del campo en el tipo Query y el nombre de la función correspondiente en el resolver sean iguales.

// Se crea el servidor
// Nos pide una configuración
// Aquí se crea una nueva instancia de ApolloServer, pasándole la configuración que incluye los typeDefs (definición del esquema) y los resolvers que se definieron anteriormente.
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// Arranque del servidor
// Este código inicia el servidor Apollo de forma independiente. Se especifica que escuche en el puerto 4000. La función devuelve la URL donde el servidor está escuchando.
const {url}= await startStandaloneServer(server,{
  listen:{
    port:4000
  }
})

// Confirmación de inicio:
console.log("App listening on " + url)

/* Flujo:
Cuando se hace una consulta GraphQL a users, Apollo Server utiliza el schema para validar la consulta.
query{
  users: {
    name
    role{
      name
    }
  }
}
// Con input o argumentos
query GetUserById {
  getUserById(id: {id: "1"}) {
    name
    role{
      name
    }
  }

}
Luego, invoca el resolver correspondiente (en este caso, la función users).
El resolver accede a los datos (aquí, el array users) y devuelve el resultado.
Apollo Server formatea la respuesta según el schema y la envía al cliente. */