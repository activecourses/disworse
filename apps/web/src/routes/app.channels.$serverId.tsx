import { Servers } from "@/components/layouts/servers";
import { isBasePath } from "@/lib/utils";
import {
    Outlet,
    createFileRoute,
    useRouterState,
} from "@tanstack/react-router";

export const Route = createFileRoute("/app/channels/$serverId")({
    component: Server,
});

// interface Params {
//     serverId: string;
// }

function Server() {
    // const { serverId } = Route.useParams<Params>();

    const isBase = isBasePath(
        "/app/channels/$serverId",
        useRouterState().location.pathname,
    );
    return (
        <>
            {isBase && <Servers />}
            {!isBase && <Outlet />}
        </>
    );
}
