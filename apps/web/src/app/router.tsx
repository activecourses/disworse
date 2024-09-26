import { AppRoot } from "@/app/routes/app/root";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export const createAppRouter = (_queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: "/",
            lazy: async () => {
                const { LandingRoute } = await import("./routes/landing");
                return { Component: LandingRoute };
            },
        },
        {
            path: "/graphql-test",
            lazy: async () => {
                const { GraphQLTestRoute } = await import(
                    "./routes/graphql-test"
                );
                return { Component: GraphQLTestRoute };
            },
        },
        {
            path: "/app",
            element: <AppRoot />,
        },
        {
            path: "*",
            lazy: async () => {
                const { NotFoundRoute } = await import("./routes/not-found");
                return { Component: NotFoundRoute };
            },
        },
    ]);

export const AppRouter = () => {
    const queryClient = useQueryClient();
    const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
    return <RouterProvider router={router} />;
};