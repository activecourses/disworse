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
            <h1 className="text-center font-bold text-4xl text-blue-600">
                Vite + React + GraphQL
            </h1>
            <div className="mt-4 text-center text-gray-600 text-lg">
                <h2 className="text-center font-bold text-2xl text-blue-600">
                    GraphQL Response:
                </h2>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-100 p-4 text-center text-gray-600 text-lg">
                    {JSON.stringify(data, null, 4)}
                </pre>
            </div>
        </>
    );
}

export default App;
