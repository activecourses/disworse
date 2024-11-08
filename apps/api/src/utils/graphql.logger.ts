import {
    ApolloServerPlugin,
    BaseContext,
    GraphQLRequestContext,
    GraphQLRequestContextWillSendResponse,
} from "@apollo/server";
import { Plugin } from "@nestjs/apollo";
import { Logger } from "@nestjs/common";
import { performance } from "perf_hooks";

@Plugin()
export class ApolloLogger implements ApolloServerPlugin {
    private readonly logger = new Logger("GraphQL");

    public async requestDidStart(
        requestContext: GraphQLRequestContext<BaseContext>,
    ) {
        const thatLogger = this.logger;
        if (requestContext.request.operationName === "IntrospectionQuery") {
            return;
        }

        requestContext.request.http?.headers.set(
            "x-request-id",
            crypto.randomUUID(),
        );
        if (!requestContext.request.http?.headers.get("x-session-id")) {
            requestContext.request.http?.headers.set(
                "x-session-id",
                crypto.randomUUID(),
            );
        }
        const now = performance.now();
        return {
            async willSendResponse(
                responseContext: GraphQLRequestContextWillSendResponse<BaseContext>,
            ) {
                if (
                    requestContext.request.operationName ===
                    "IntrospectionQuery"
                ) {
                    return;
                }
                thatLogger.log({
                    sessionId:
                        requestContext.request.http?.headers.get(
                            "x-session-id",
                        ),
                    requestId:
                        requestContext.request.http?.headers.get(
                            "x-request-id",
                        ),
                    query: requestContext.request.query,
                    variables: requestContext.request.variables,
                    resposneTime: performance.now() - now,
                    responseDate: new Date().toISOString(),
                    error: responseContext.errors,
                });
            },
        };
    }
}
