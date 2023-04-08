import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"
import { Field, ObjectType } from "type-graphql"

@ObjectType()
@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class User {
    @Field(() => String)
    @prop({ required: true, minlength: 6, maxlength: 20, unique: true })
    userName!: string

    @Field(() => String)
    @prop({ required: true, minlength: 10, maxlength: 50, unique: true })
    email!: string

    @Field(() => String)
    @prop({ required: true, minlength: 6 })
    password!: string
}

export default getModelForClass(User)
