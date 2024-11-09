import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
    "/_auth/app/channels/$serverId/$channelId",
)({
    component: ChannelId,
});

function ChannelId() {
    return (
        <>
            <Outlet />
        </>
    );
}
