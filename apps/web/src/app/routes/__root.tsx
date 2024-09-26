import { env } from "@/config/env";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import * as React from "react";

const TanStackRouterDevtools = React.lazy(() =>
    // Lazy load in development
    import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
    })),
);

export const Route = createRootRoute({
    component: () => (
        <>
            {env.DEV && (
                <div className="fixed bottom-12 left-2 flex w-max justify-center justify-items-center gap-2 rounded-lg border border-slate-600 bg-secondary p-2 align-middle text-secondary-">
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
            <Outlet />
            {env.DEV && (
                <React.Suspense fallback={null}>
                    <TanStackRouterDevtools />
                </React.Suspense>
            )}
        </>
    ),
});
