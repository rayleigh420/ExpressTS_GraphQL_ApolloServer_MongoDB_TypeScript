import { Resolver } from "type-graphql";
import { Query } from 'type-graphql/dist/decorators'

@Resolver()
export default class UserResolver {
    @Query(_return => String)
    me(): String {
        return 'Hello word'
    }

}