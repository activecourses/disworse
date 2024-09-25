import { Spinner } from "@/components/ui/spinner";
import { graphqlRequest } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";

const query = graphql(`
    query hello {
        hello
    }
`);

export const GraphQLTestRoute = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["hello"],
        queryFn: async () =>
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(graphqlRequest(query));
                }, 1000);
            }),
    });

    if (isLoading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Spinner size="xl" />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <img src="/disworse-logo.jpg" alt="logo" className="h-24 w-24" />
            <h1 className="mt-4 font-bold text-4xl text-slate-900">
                App GraphQL Test
            </h1>
            <div className="mt-4 text-center text-gray-600 text-lg">
                <h2 className="text-center font-bold text-2xl text-blue-600">
                    GraphQL Response:
                </h2>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-center text-gray-600 text-lg">
                    {JSON.stringify(data, null, 4)}
                </pre>
            </div>
        </div>
    );
};
