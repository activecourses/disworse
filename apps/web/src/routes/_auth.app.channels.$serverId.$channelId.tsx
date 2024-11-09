import { FriendsNavbar } from "@/components/layouts/friends-navbar";
import { isBasePath } from "@/lib/utils";
import { useResponsive } from "@/providers/responsive-provider";
import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute(
    "/_auth/app/channels/$serverId/$channelId",
)({
    component: ChannelId,
});

function ChannelId() {
    const { openNavs, closeNavs } = useResponsive();
    const pathname = useRouterState().location.pathname;
    const isBase = isBasePath("/app/channels/$serverId/$channelId", pathname);

    const handleResize = () => {
        if (window.innerWidth < 1024 && isBase) {
            closeNavs();
        } else {
            openNavs();
        }
    };
    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return <></>;
}
