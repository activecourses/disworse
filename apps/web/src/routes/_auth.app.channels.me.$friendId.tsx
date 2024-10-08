import { FirendNavbar } from "@/components/layouts/friend-navbar";
import { createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app/channels/me/$friendId")({
    component: FriendRoot,
});

function FriendRoot() {
    const pathname = useLocation().pathname;

    return <FirendNavbar id={Number(pathname.split("/").pop())} />;
}
