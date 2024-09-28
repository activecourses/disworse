import { Logo } from "@/components/ui/logo";
import { Skeleton } from "@/components/ui/skeleton";
import { graphqlRequest } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { graphql } from "gql.tada";

export const Route = createFileRoute("/graphql-test")({
    component: GraphQLTestRoute,
});

const query = graphql(`
  query hello {
    hello
  }
`);

function GraphQLTestRoute() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["hello"],
        queryFn: async () =>
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(graphqlRequest(query));
                }, 2000);
            }),
    });

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <Logo alt="Logo" className="h-24 w-24" />
            <h1 className="mt-4 font-bold text-4xl text-foreground">
                App GraphQL Test
            </h1>
            <div className="mt-4 text-center text-lg">
                {isLoading ? (
                    <Skeleton className="h-32 w-[400px] p-4" />
                ) : error ? (
                    <div>Error: {error.message}</div>
                ) : (
                    <div className="flex h-32 w-[400px] items-center justify-center overflow-x-auto rounded-lg bg-secondary p-4 text-foreground text-lg">
                        <pre className="text-left">
                            <code>{JSON.stringify(data, null, 4)}</code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
}
