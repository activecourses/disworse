import { Logo } from "@/components/ui/logo";
import { useEffect, useRef } from "react";

export const FriendChat = ({ id }: { id: number }) => {
    const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView();
    }, []);
    return (
        <section
            className={`scrollbar-hide scrollbar-none lg:scrollbar-show lg:scrollbar-block flex w-full flex-col-reverse overflow-y-auto bg-zinc-600/50 pt-5 lg:w-3/4 ${window.innerWidth < 1024 ? " slide-in-from-bottom animate-in duration-700" : ""}`}
        >
            <div className="flex flex-col gap-4">
                {Array.from({ length: 25 }).map((_, index) => (
                    <div
                        className="flex cursor-default gap-2 px-5 py-2 hover:bg-zinc-800/50"
                        key={index}
                    >
                        <Logo
                            alt="Friend"
                            className="h-10 w-10 rounded-full hover:rounded-full"
                        />
                        <div className="w-full">
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-white">
                                    {index % 2 === 0
                                        ? `Friend ${id}`
                                        : `TheGoatt`}
                                </h2>
                                <p className="text-white/40 text-xs">
                                    {new Date().toLocaleString()}
                                </p>
                            </div>
                            <p>Welcome this is a message number {index}</p>
                        </div>
                    </div>
                ))}
                <div className="sticky bottom-0 w-full px-2">
                    <input
                        className="w-full rounded-md border-2 border-zinc-700 border-solid bg-zinc-700 px-4 py-3 text-white text-xs outline-none"
                        name="text"
                        placeholder={`Message @Friend ${id}`}
                        type="text"
                    />
                </div>

                <div ref={endOfMessagesRef} />
            </div>
        </section>
    );
};
