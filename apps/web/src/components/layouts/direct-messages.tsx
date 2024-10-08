import { Logo } from "@/components/ui/logo";
import { OfflineStatus } from "@/components/ui/status/offline";
import { OnlineStatus } from "@/components/ui/status/online";
import { useResponsive } from "@/providers/responsive-provider";
import { Link, useLocation } from "@tanstack/react-router";

export const DirectMessages = () => {
    const { isNavsOpen, closeNavs } = useResponsive();
    const pathname = useLocation().pathname;

    return (
        !!isNavsOpen && (
            <nav
                className={`flex w-full flex-col bg-zinc-800 text-white lg:w-80 ${window.innerWidth < 1024 ? "slide-in-from-right animate-in duration-700" : ""}`}
            >
                {/* Search bar */}
                <div className="flex h-12 items-center justify-center border-black border-b py-3">
                    <input
                        className="w-5/6 rounded-md border-2 border-zinc-700 border-solid bg-transparent px-4 py-1 text-white text-xs outline-none transition-colors duration-100 focus:border-black"
                        name="text"
                        placeholder="Find or start a conversation"
                        type="text"
                    />
                </div>
                {/* Online Friends */}
                <div className="scrollbar-none scrollbar-hide overflow-y-auto px-2">
                    <Link
                        to="/app/channels/me"
                        className={`mt-2 mb-2 flex h-14 w-full cursor-pointer items-center gap-2 rounded-md px-2 py-2 font-semibold opacity-80 hover:bg-zinc-900 ${pathname === "/app/channels/me" && window.innerWidth > 1024 ? "bg-zinc-900" : ""}`}
                        onClick={() => {
                            if (window.innerWidth < 1024) closeNavs();
                        }}
                    >
                        <Logo className="h-10 w-10 rounded-full" alt="Friend" />
                        Friends
                    </Link>
                    {/* Private Chats */}
                    <div className="mb-2 flex items-center justify-between px-4">
                        <h3 className="font-bold text-xs uppercase">
                            Direct Messages
                        </h3>
                    </div>
                    <div className="flex flex-col gap-1">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <Link
                                to={`/app/channels/me/${index}`}
                                key={index}
                                onClick={() => {
                                    if (window.innerWidth < 1024) closeNavs();
                                }}
                                className={`flex h-14 cursor-pointer items-center gap-2 rounded-md px-2 py-2 hover:bg-zinc-900 ${pathname === `/app/channels/me/${index}` && window.innerWidth > 1024 ? "bg-zinc-900" : ""}`}
                            >
                                <div className="relative">
                                    {/* Friend Image */}
                                    <Logo
                                        className="h-10 w-10 rounded-full"
                                        alt="Friend"
                                    />
                                    {/* Friend Status */}
                                    {index % 2 === 0 ? (
                                        <OnlineStatus />
                                    ) : (
                                        <OfflineStatus />
                                    )}
                                </div>

                                <h4 className="font-semibold opacity-80">
                                    Friend number {index}
                                </h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        )
    );
};
