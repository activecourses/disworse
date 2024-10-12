import { Servers } from "@/components/layouts/servers";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/channels/$serverId/$channelId")({
    component: ChannelId,
});

function ChannelId() {
    return (
        <>
            <div>
                <Servers />
            </div>
        </>
    );
}
