import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

// Definir lo minimo necesario para que GraphQL pueda funcionar
// GraphQL nos pide dos cosas para crear la api de GraphQL

// Tipo Query, se debe definir el tipado
// Resolvers: Funciones que determinan cómo se obtienen los datos para cada campo.


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