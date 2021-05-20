import { Resolvers } from "../gqlTypes";
import { foo } from "./queries";
import { createFoo } from "./mutations";
import { Foo } from "./trivials";

const Query: Resolvers["Query"] = {
  fooList: foo,
};
const Mutation: Resolvers["Mutation"] = {
  createFoo,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
  Foo,
};
