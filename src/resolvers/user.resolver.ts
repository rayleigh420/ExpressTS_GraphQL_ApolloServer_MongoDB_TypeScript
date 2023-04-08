import { User } from "src/schemas/user.schema";
import { Resolver } from "type-graphql";
import { Query, Mutation } from 'type-graphql/dist/decorators'

@Resolver()
export default class UserResolver {
    @Query(_return => String)
    me(): String {
        return 'Hello word'
    }

}