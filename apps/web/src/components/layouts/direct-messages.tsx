import { Link } from "@tanstack/react-router";
import { Logo } from "../ui/logo";
import { OfflineStatus } from "../ui/status/offline";
import { OnlineStatus } from "../ui/status/online";

export const DirectMessages = () => {
    return (
        <nav className="flex h-screen w-full flex-col bg-zinc-800 pl-20 text-white md:w-[320px]">
            {/* Search bar */}
            <div className="flex h-12 items-center justify-center border-black border-b py-3 ">
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
                    className="mt-2 mb-2 flex h-14 cursor-pointer items-center gap-2 rounded-md px-2 py-2 font-semibold opacity-80 hover:bg-zinc-900"
                >
                    <Logo className="h-10 w-10 rounded-full" alt="Friend" />
                    Friends
                </Link>
                {/* Private Chats */}
                <div className="">
                    <div className="mb-2 flex items-center justify-between px-4">
                        <h3 className="font-bold text-xs uppercase">
                            Direct Messages
                        </h3>
                    </div>
                    <div className="flex flex-col gap-1">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <Link
                                to={index.toString()}
                                key={index}
                                className="flex h-14 cursor-pointer items-center gap-2 rounded-md px-2 py-2 hover:bg-zinc-900"
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
            </div>
        </nav>
    );
};
