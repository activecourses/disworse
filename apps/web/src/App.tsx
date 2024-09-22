import { useQuery } from "@tanstack/react-query";
import { graphql } from "gql.tada";
import request from "graphql-request";
import "./App.css";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

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
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React + GraphQL</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div>
                <h2>GraphQL Response:</h2>
                <pre> {JSON.stringify(data, null, 4)}</pre>
            </div>
        </>
    );
}

export default App;
