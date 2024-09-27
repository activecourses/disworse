import { Link } from "@tanstack/react-router";
import { Logo } from "../ui/logo";
import { OfflineStatus } from "../ui/status/offline";
import { OnlineStatus } from "../ui/status/online";

export const DirectMessages = () => {
    return (
        <nav className="ml-20 flex h-screen w-[240px] flex-col bg-zinc-800 text-white">
            {/* Search bar */}
            <div className="flex h-12 items-center justify-center border-black border-b py-3 ">
                <input
                    className="w-5/6 rounded-md border-2 border-black border-solid bg-transparent px-4 py-1 text-white text-xs outline-none transition-colors duration-100 focus:border-[#596A95]"
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
                    <Logo
                        className="h-10 w-10 rounded-full border-2 border-zinc-800 bg-zinc-900 p-2 "
                        alt="Friend"
                    />
                    {/* <svg
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
                    ></path>
                </svg> */}
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
                                        className="h-10 w-10 rounded-full border-2 border-zinc-800 bg-zinc-900 p-2 "
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
