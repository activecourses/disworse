import { Sidebar } from "@/components/layouts/sidebar";
import { Logo } from "@/components/ui/logo";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
    component: AppRoot,
});

function AppRoot() {
    return (
        <>
            <Sidebar />
            <div className="flex h-screen flex-col items-center justify-center">
                <Logo alt="Logo" className="h-24 w-24" />
                <h1 className="mt-4 font-bold text-4xl text-foreground">
                    App Root
                </h1>
            </div>
        </>
    );
}
