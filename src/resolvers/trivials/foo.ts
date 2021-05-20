import { FooResolvers } from "../../gqlTypes";

export const Foo: FooResolvers = {
  name: (parent, {}, context) => {
    return parent.name;
  },
};
