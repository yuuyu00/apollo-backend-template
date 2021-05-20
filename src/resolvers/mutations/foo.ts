import { MutationResolvers } from "../../gqlTypes";

export const createFoo: MutationResolvers["createFoo"] = async (
  {},
  { input: { name } },
  { prisma }
) => {
  const createdFoo = await prisma.foo.create({ data: { name } });
  return createdFoo;
};
