import { users } from "../data/users.data";

// Se define cómo se resuelven las consultas. En este caso, la consulta 'users' devuelve el primer usuario del array.
export const resolvers = {
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
