import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app/channels")({
    component: () => (
        <div>
            <Outlet />
        </div>
    ),
});
