import express, { Express } from 'express'
import 'reflect-metadata'
import cors from 'cors'
import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4'
import { buildSchema } from 'type-graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground'
import { json } from 'body-parser';

import UserResolver from './resolvers/user.resolver';
import { connectToDb } from './utis/connectDB';

dotenv.config()

const port: number | string = process.env.PORT || 8080;

(async () => {
    // Init Express
    const app: Express = express()

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver]
        }),
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]

    })

    await server.start()

    // Route
    app.use('/graphql', cors<cors.CorsRequest>(), json(), expressMiddleware(server))

    // Connect Database
    connectToDb()

    app.listen(port, () => {
        console.log(`-------------Web is listening on port ${port}------------`)
    })

})()
