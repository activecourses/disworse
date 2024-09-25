import { ThemeProvider } from "@/components/theme/theme-provider";
import { queryConfig } from "@/lib/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";

type AppProviderProps = {
    children: React.ReactNode;
};

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
                {import.meta.env.DEV && <ReactQueryDevtools />}
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};
