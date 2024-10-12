import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/channels")({
    component: () => (
        <div>
            <Outlet />
        </div>
    ),
});
