import { Logo } from "@/components/ui/logo";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useResponsive } from "@/providers/responsive-provider";
import { Link, useLocation } from "@tanstack/react-router";

export const Sidebar = () => {
    const { isNavsOpen } = useResponsive();
    const pathname = useLocation().pathname;

    return (
        !!isNavsOpen && (
            <nav
                className={`scrollbar-none scrollbar-hide w-24 overflow-y-auto bg-zinc-900 ${window.innerWidth < 1024 ? "slide-in-from-left animate-in duration-700" : ""}`}
            >
                {/* Dashboard */}
                <TooltipProvider>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger className="w-full">
                            <Link
                                to="/app/channels/me"
                                className="group relative flex items-center justify-center py-2"
                            >
                                <Logo alt="Dashboard" />
                                <div
                                    className={`absolute left-0 flex w-1 items-center justify-center overflow-hidden rounded-full bg-white duration-100 ${pathname === "/app/channels/me" && window.innerWidth > 1024 ? "top-3 h-2/3 " : "top-1/2 h-2 group-hover:top-5 group-hover:h-6"}`}
                                ></div>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            Direct Messages
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                {/* underline */}
                <div className="mx-auto h-0.5 w-1/2 bg-zinc-600"></div>
                {/* Servers */}
                <div className="flex flex-col items-center justify-center gap-4 pt-4">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger className="w-full">
                                    <div
                                        key={index}
                                        className="group relative flex w-full items-center justify-center"
                                    >
                                        <Logo alt="server" />
                                        {/* Notifcation */}
                                        <div
                                            className={`absolute left-0 flex w-1 items-center justify-center overflow-hidden rounded-full bg-white duration-100 group-hover:top-3 group-hover:h-6 ${pathname === "/app/channels/" + index ? "top-0 h-full" : "top-1/3 h-2"}`}
                                        ></div>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    Server {index}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </nav>
        )
    );
};
