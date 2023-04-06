import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose"

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class User {
    @prop({ required: true, minlength: 6, maxlength: 20, unique: true })
    userName: string

    @prop({ required: true, minlength: 10, maxlength: 50, unique: true })
    email: string

    @prop({ required: true, minlength: 6 })
    password: string
}

export default getModelForClass(User)
