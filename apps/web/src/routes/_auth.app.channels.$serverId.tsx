import { Servers } from "@/components/layouts/servers";
import { isBasePath } from "@/lib/utils";
import { useResponsive } from "@/providers/responsive-provider";
import {
    Outlet,
    createFileRoute,
    useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/_auth/app/channels/$serverId")({
    component: Server,
});

// interface Params {
//     serverId: string;
// }

function Server() {
    // const { serverId } = Route.useParams<Params>();
    return (
        <>
            {/* {isBase && <Servers />} */}
            <Outlet />
            <Servers />
            {/* {!isBase && <Outlet />} */}
        </>
    );
}
