import { QueryResolvers } from "../../gqlTypes";

export const foo: QueryResolvers["fooList"] = async ({}, {}, { prisma }) => {
  const foos = await prisma.foo.findMany();
  return foos;
};
