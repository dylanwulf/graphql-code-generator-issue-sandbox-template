import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations", "typescript-resolvers"] },
  },
};

export default config;
