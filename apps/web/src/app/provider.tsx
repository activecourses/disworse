import { ThemeProvider } from "@/components/theme/theme-provider";
import { env } from "@/config/env";
import { queryConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";

type AppProviderProps = {
    children: React.ReactNode;
};

const ReactQueryDevtoolsProduction = React.lazy(() =>
    import("@tanstack/react-query-devtools/build/modern/production.js").then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
);

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig,
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {env.DEV && (
                    <React.Suspense fallback={null}>
                        <ReactQueryDevtoolsProduction />
                    </React.Suspense>
                )}
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};
