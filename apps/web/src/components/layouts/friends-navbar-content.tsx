import searchIcon from "@/assets/search-icon.svg";
import { Logo } from "@/components/ui/logo";
import { Link } from "@tanstack/react-router";
import { OnlineStatus } from "../ui/status/online";

export const FriendsNavbarContent = () => {
    return (
        <section
            className={`scrollbar-none scrollbar-hide h-screen overflow-y-auto bg-zinc-600/50 p-5 ${window.innerWidth < 1024 ? " slide-in-from-bottom animate-in duration-700 " : ""}`}
        >
            {/* Searchbar */}
            <div className="flex items-center justify-center">
                <input
                    type="search"
                    placeholder="Search"
                    className="w-5/6 rounded-l-md bg-zinc-950 p-2 outline-none"
                />
                <button className="rounded-r-md bg-zinc-950 p-1">
                    <img src={searchIcon} alt="search" />
                </button>
            </div>
            {/* Friends */}
            <div className="mt-5 flex flex-col">
                <h1 className="border-gray-100/5 border-b px-5 py-4 text-white/65">
                    Online — 5
                </h1>
                <div className="flex flex-col gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Link
                            to={`/app/channels/me/${index}`}
                            key={index}
                            className="group flex cursor-pointer items-center gap-3 rounded-md bg-zinc-700/50 px-5 py-4 hover:bg-zinc-700"
                        >
                            <div className="relative">
                                <Logo
                                    alt="Friend"
                                    className="h-14 w-14 rounded-full"
                                />
                                <OnlineStatus />
                            </div>
                            <div>
                                <h2 className="text-white">
                                    Friend {index}{" "}
                                    <span className="hidden opacity-70 group-hover:inline">
                                        username {index}
                                    </span>
                                </h2>
                                <p className="text-white/50">Online</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
