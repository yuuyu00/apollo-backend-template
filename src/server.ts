import { ApolloServer, gql } from "apollo-server";
import path from "path";
import { readFileSync } from "fs";
import { createContext } from "./context";
import { resolvers } from "./resolvers";

const getTypeDefs = () => {
  const schemaPath = path.join("schema/", "schema.gql");
  const schemaStr = readFileSync(schemaPath, "utf8");
  return gql`
    ${schemaStr}
  `;
};

new ApolloServer({
  typeDefs: getTypeDefs(),
  context: createContext,
  resolvers: resolvers,
}).listen({ port: 9000 }, () => console.log("listening on 9000"));
