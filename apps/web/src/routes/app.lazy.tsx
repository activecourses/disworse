import { Sidebar } from "@/components/layouts/sidebar";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/app")({
    component: AppRoot,
});

function AppRoot() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}
