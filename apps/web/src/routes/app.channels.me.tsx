import { DirectMessages } from "@/components/layouts/direct-messages";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/channels/me")({
    component: MeRoot,
});

function MeRoot() {
    return (
        <>
            <DirectMessages />
            <Outlet />
        </>
    );
}
