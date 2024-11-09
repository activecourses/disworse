import { Servers } from "@/components/layouts/servers";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app/channels/$serverId")({
    component: Server,
});

function Server() {
    return (
        <>
            <Outlet />
            <Servers />
        </>
    );
}
