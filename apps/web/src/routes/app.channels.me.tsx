import { DirectMessages } from "@/components/layouts/direct-messages";
import { FriendsNavbar } from "@/components/layouts/friends-navbar";
import { FriendsNavbarContent } from "@/components/layouts/friends-navbar-content";
import { useResponsive } from "@/providers/responsive-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/channels/me")({
    component: MeRoot,
});

function MeRoot() {
    const { isNavsOpen } = useResponsive();

    return (
        <>
            <DirectMessages />
            <div
                className={`w-full flex-col ${isNavsOpen ? "hidden lg:flex" : "flex"}`}
            >
                <FriendsNavbar />
                <FriendsNavbarContent />
            </div>
        </>
    );
}
