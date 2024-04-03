import { connectMongoDB } from "./db/db";
import { ApolloServer, ApolloServer } from "@apollo/server";
import express from "express";
import  mongoose from "mongoose";
import  dotenv from "dotenv";
import  cors from "cors";

async function testServer() {
    const app = express();
    app.use(cors())
    dotenv.config()

    const apolloServer = new ApolloServer({})
    await apolloServer.start();

    
}
