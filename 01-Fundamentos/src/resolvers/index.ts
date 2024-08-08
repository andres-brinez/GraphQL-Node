import { GraphQLError } from "graphql";
import { users } from "../data/users.data";

// Se define cómo se resuelven las consultas. En este caso, la consulta 'users' devuelve el primer usuario del array.
export const resolvers = {
  Query: {
    users: () => users,
    user: () => users[0],
    getUserById: (parent, args, context, info) => {
      console.log(args);
      const { id } = args.id

      const user = users.find(user => user.email === id);

      // Manejo de errores
      if (!user[0]) {
        // throw new Error("El usuario "+id+ "no existe") /* muestre el mensaje pero no cambia el estado de la respuesta */
        throw new GraphQLError("El usuario "+id+ "no existe",{ /* muestra el mensaje y cambia el estado de la respuesta */
          // Las extensiones son un objeto que se puede agregar a un error para proporcionar información adicional sobre el error.
          // Esto se puede personalizar
          extensions:{
            code: "NOT_FOUND_USER",
      
            http:{
              status: 404
            }
          }
        }) 
      }
      return user
    }

  }
}
