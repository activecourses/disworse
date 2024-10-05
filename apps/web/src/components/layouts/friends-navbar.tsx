import hambuger from "@/assets/hamburger.svg";
import { useResponsive } from "@/providers/responsive-provider";
import { useEffect, useState } from "react";

export const FriendsNavbar = () => {
    const { openNavs, isNavsOpen } = useResponsive();
    const [ismenuOpen, setIsmenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsmenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const buttonsClasses = "hover:bg-zinc-900 px-3 py-1 rounded-lg";

    const buttons = (
        <>
            <button className={`${buttonsClasses} bg-zinc-900`}>Online</button>
            <button className={buttonsClasses}>All</button>
            <button className={buttonsClasses}>Pending</button>
            <button className={buttonsClasses}>Blocked</button>
            <button className="rounded-md bg-green-700 px-3 py-1">
                Add Friend
            </button>
        </>
    );

    return (
        <section
            className={`-mt-[0.8px] border-b border-b-black ${window.innerWidth < 1024 ? "slide-in-from-top animate-in duration-700" : ""}`}
        >
            <nav className="flex flex-col-reverse items-center justify-between bg-zinc-600/50 px-4 py-2 md:w-full md:flex-row">
                <div className="hidden flex-row items-center gap-3 md:flex">
                    <p className="cursor-default border-r border-r-gray-500 px-4">
                        Friends
                    </p>
                    {buttons}
                </div>

                {ismenuOpen && (
                    <div className="mt-4 flex w-full flex-col items-center gap-3">
                        {buttons}
                    </div>
                )}
                <div className="flex w-full items-center justify-between md:w-auto">
                    <button
                        className={isNavsOpen ? "hidden" : "inline"}
                        onClick={() => openNavs()}
                    >
                        <img src={hambuger} alt="hamburger" />
                    </button>
                    <button
                        className="inline rounded-md border-2 border-green-700 px-4 py-2 md:hidden"
                        onClick={() => setIsmenuOpen(!ismenuOpen)}
                    >
                        Friends
                    </button>
                </div>
            </nav>
        </section>
    );
};
