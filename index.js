import { ApolloServer } from "apollo-server-express";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/db.js";
import mySchema from "./schema.js";
import myResolvers from "./resolver/resolvers.js";

dotenv.config();

async function testServer() {
  const app = express();
  app.use(cors());

  const apolloServer = new ApolloServer({
    typeDefs: mySchema,
    resolvers: myResolvers,
  });

  await apolloServer.start();

  try {
    await connectMongoDB();
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    throw new Error("error at connecting to MongoDB", error);
  }

  apolloServer.applyMiddleware({ app });

  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is listening at ${PORT}`);
  });
}

testServer();
