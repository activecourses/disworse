import { env } from "@/config/env";
import type { AuthContext } from "@/providers/auth-provider";
import {
    Link,
    Outlet,
    createRootRouteWithContext,
} from "@tanstack/react-router";
import * as React from "react";

const TanStackRouterDevtools = React.lazy(() =>
    // Lazy load in development
    import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
    })),
);

interface MyRouterContext {
    auth: AuthContext;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <>
            <div className="h-screen">
                <Outlet />
            </div>
            {env.DEV && (
                <div className="fixed bottom-12 left-2 z-50 flex w-max justify-center justify-items-center gap-2 rounded-lg border border-slate-600 bg-secondary p-2 align-middle">
                    <Link to="/" className="[&.active]:font-bold">
                        Landing
                    </Link>
                    <Link to="/graphql-test" className="[&.active]:font-bold">
                        GraphQL Test
                    </Link>
                    <Link to="/app" className="[&.active]:font-bold">
                        App
                    </Link>
                </div>
            )}
            {env.DEV && (
                <React.Suspense fallback={null}>
                    <TanStackRouterDevtools />
                </React.Suspense>
            )}
        </>
    ),
});
