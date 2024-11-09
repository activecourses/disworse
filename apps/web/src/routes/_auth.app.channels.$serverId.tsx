// import { Servers } from "@/components/layouts/servers";
import { isBasePath } from "@/lib/utils";
import {
    Outlet,
    createFileRoute,
    useRouterState,
} from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app/channels/$serverId")({
    component: Server,
});

function Server() {
    isBasePath("/app/channels/$serverId", useRouterState().location.pathname);
    return (
        <>
            <Outlet />
            {/* <Servers /> */}
        </>
    );
}
