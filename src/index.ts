import express, { Express } from 'express'
import dotenv from 'dotenv'
import { connectToDb } from './utis/connectDB';

dotenv.config()

const port: number | string = process.env.PORT || 8080;
const app: Express = express()

connectToDb()

app.listen(port, () => {
    console.log(`-------------Web is listening on port ${port}------------`)
})