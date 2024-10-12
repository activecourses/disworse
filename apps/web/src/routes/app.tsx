import { Sidebar } from "@/components/layouts/sidebar";
import { Logo } from "@/components/ui/logo";
import { isBasePath } from "@/lib/utils";

import {
    Outlet,
    createFileRoute,
    useRouterState,
} from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
    component: AppRoot,
});

function AppRoot() {
    const isBase = isBasePath("/app", useRouterState().location.pathname);

    return (
        <>
            <Sidebar />
            <div className="min-h-screen w-full pl-20">
                {isBase && (
                    <div className="flex h-screen flex-col items-center justify-center">
                        <Logo alt="Logo" className="h-24 w-24" />
                        <h1 className="mt-4 font-bold text-4xl text-foreground">
                            App Root
                        </h1>
                    </div>
                )}
                {!isBase && <Outlet />}
            </div>
        </>
    );
}
