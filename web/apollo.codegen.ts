import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

console.log("[schema]:", process.env.VITE_API_HTTP_URL);

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.VITE_API_HTTP_URL,
  documents: ["./src/**/*.ts"],
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
      config: {
        useTypeImports: true,
      },
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
