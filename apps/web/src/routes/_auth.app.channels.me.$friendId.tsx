import { FriendChat } from "@/components/layouts/friend-chat";
import { FriendMiniProfile } from "@/components/layouts/friend-mini-profile";
import { FirendNavbar } from "@/components/layouts/friend-navbar";
import { createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app/channels/me/$friendId")({
    component: FriendRoot,
});

function FriendRoot() {
    const pathname = useLocation().pathname;

    return (
        <>
            <FirendNavbar id={Number(pathname.split("/").pop())} />
            <div className="flex h-screen overflow-y-auto">
                <FriendChat id={Number(pathname.split("/").pop())} />
                <FriendMiniProfile id={Number(pathname.split("/").pop())} />
            </div>
        </>
    );
}
