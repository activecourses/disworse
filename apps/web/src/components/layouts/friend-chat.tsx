import { Message } from "@/components/ui/messages/message";
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
                    <Message key={index} id={id.toString()} index={index} />
                ))}
                <div className="sticky bottom-0 w-full px-2 pt-3">
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
