import * as uuid from "uuid";
import { GraphQLScalarType, Kind } from "graphql";

function validate(value: unknown): string | never {
  if (typeof value !== "string" || !uuid.validate(value)) {
    throw new Error("invalid uuid");
  }

  return value;
}

export const UUID = new GraphQLScalarType<unknown, string>({
  name: "UUID",
  description: "uuid type",
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
  parseLiteral: (ast) => {
    if (ast.kind === Kind.STRING) {
      return validate(ast.value);
    }

    return null;
  },
});
