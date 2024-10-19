import hambuger from "@/assets/hamburger.svg";
import videoCall from "@/assets/video-call.svg";
import voiceCall from "@/assets/voice-call.svg";
import { Logo } from "@/components/ui/logo";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useResponsive } from "@/providers/responsive-provider";

export const FirendNavbar = ({ id }: { id: number }) => {
    const { isNavsOpen, openNavs } = useResponsive();
    return (
        <section
            className={`-mt-[0.8px] border-b border-b-black ${window.innerWidth < 1024 ? "slide-in-from-top animate-in duration-700" : ""}`}
        >
            <nav className="flex items-center justify-between bg-zinc-600/50 px-4 py-2 md:w-full md:flex-row">
                <div className="flex items-center gap-2">
                    <button
                        className={isNavsOpen ? "hidden" : "inline"}
                        onClick={() => openNavs()}
                    >
                        <img src={hambuger} alt="hamburger" />
                    </button>
                    <Logo className="h-8 w-8 rounded-full" alt="Friend" />
                    <h1 className="font-bold">Friend number {id}</h1>
                    {/* vertical line */}
                    <div className="ml-4 hidden h-8 w-[1px] bg-gray-100/50 md:block"></div>
                    <p className="hidden cursor-default rounded-full bg-zinc-800 px-2 py-1 font-bold text-gray-100/50 text-xs md:block">
                        AKA
                    </p>
                    <p className="hidden font-thin text-gray-100/70 md:block">
                        username {id}
                    </p>
                </div>
                <div className="hidden items-center gap-4 md:flex">
                    <TooltipProvider>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger>
                                <img
                                    src={voiceCall}
                                    alt="Voice call"
                                    className="h-7 w-7"
                                />
                            </TooltipTrigger>
                            <TooltipContent side="top">
                                Voice call
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <img
                                    src={videoCall}
                                    alt="Video call"
                                    className="h-7 w-7"
                                />
                            </TooltipTrigger>
                            <TooltipContent side="top">
                                Video call
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </nav>
        </section>
    );
};
