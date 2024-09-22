import { useQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import request from "graphql-request";

const query = graphql(`
    query hello {
        hello
    }
`);

function App() {
    const { data } = useQuery({
        queryKey: ["hello"],
        queryFn: () => request("http://localhost:3333/graphql", query),
    });

    return (
        <>
            <h1
                className="
                    text-4xl
                    font-bold
                    text-center
                    text-blue-600
                "
            >
                Vite + React + GraphQL
            </h1>
            <div
                className="
                    text-lg
                    text-center
                    text-gray-600
                    mt-4
                "
            >
                <h2
                    className="
                        text-2xl
                        font-bold
                        text-center
                        text-blue-600
                    "
                >
                    GraphQL Response:
                </h2>
                <pre
                    className="
                        text-lg
                        text-center
                        text-gray-600
                        mt-4
                        p-4 bg-gray-100
                        rounded-lg
                        overflow-x-auto
                    "
                >
                    {JSON.stringify(data, null, 4)}
                </pre>
            </div>
        </>
    );
}

export default App;
