import { env } from "@/config/env";
import { TadaDocumentNode } from "gql.tada";
import request from "graphql-request";

export const graphqlRequest = (
    query: TadaDocumentNode,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    variables?: Record<string, any>,
) => {
    return request(`${env.API_URL}/graphql`, query, variables);
};
