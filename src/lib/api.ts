import { getSdk } from "@/gql/sdk";
import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.WORDPRESS_API_URL;
if (!endpoint) {
  throw new Error("Missing WORDPRESS_API_URL");
}
const client = new GraphQLClient(endpoint);
const sdk = getSdk(client);

export const getNodeByUri = async (uri: string) => {
  return sdk.GetNodeByURI({ uri });
};
