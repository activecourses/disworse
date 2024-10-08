import { Sidebar } from "@/components/layouts/sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app")({
    component: AppRoot,
});

function AppRoot() {
    return (
        <main className="flex h-screen">
            <Sidebar />
            <Outlet />
        </main>
    );
}
