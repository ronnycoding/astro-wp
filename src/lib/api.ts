import { GraphQLClient } from "graphql-request";
import { getSdk } from "../gql/sdk";

const endpoint = import.meta.env.WORDPRESS_API_URL;
const client = new GraphQLClient(endpoint);
const sdk = getSdk(client);

export const getNodeByUri = async (uri: string) => {
  return sdk.GetNodeByURI({ uri });
};
