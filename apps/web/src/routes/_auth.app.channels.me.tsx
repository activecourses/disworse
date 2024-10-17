import { DirectMessages } from "@/components/layouts/direct-messages";
import { FriendsNavbar } from "@/components/layouts/friends-navbar";
import { FriendsNavbarContent } from "@/components/layouts/friends-navbar-content";
import { useResponsive } from "@/providers/responsive-provider";
import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/app/channels/me")({
    component: MeRoot,
});

function MeRoot() {
    const { isNavsOpen } = useResponsive();
    const pathname = useLocation().pathname;

    return (
        <>
            <DirectMessages />
            <div
                className={`w-full flex-col ${isNavsOpen ? "hidden lg:flex" : "flex"}`}
            >
                {pathname === "/app/channels/me" ? (
                    <>
                        <FriendsNavbar />
                        <FriendsNavbarContent />
                    </>
                ) : (
                    <>
                        <Outlet />
                    </>
                )}
            </div>
        </>
    );
}
