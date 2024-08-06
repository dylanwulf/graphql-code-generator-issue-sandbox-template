import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-resolvers",
        {
          add: {
            content: ["import type { DeepPartial } from './utilTypes';"],
          },
        },
      ],
    },
  },
  config: {
    defaultMapper: "DeepPartial<{T}>",
  },
};

export default config;
