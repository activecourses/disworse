import { Logo } from "@/components/ui/logo";
import { MessageActions } from "@/components/ui/messages/message-actions";
import { useState } from "react";

export const Message = ({ index, id }: { index: number; id: string }) => {
    const [react, setReact] = useState<null | string>(null);

    const reactHandler = (emoji: string) => {
        setReact(emoji);
    };

    return (
        <div className="group relative flex cursor-default gap-2 px-5 py-2 hover:bg-zinc-800/50">
            <div className="-top-5 absolute right-0 hidden group-hover:block">
                <MessageActions reactHandler={reactHandler} />
            </div>
            <button
                onClick={() => {
                    setReact(null);
                }}
                className="-bottom-3.5 absolute left-6 rounded-lg bg-zinc-900 px-1 text-lg text-zinc-300"
            >
                {react}
            </button>

            <Logo
                alt="Friend"
                className="h-10 w-10 rounded-full hover:rounded-full"
            />
            <div className="w-full">
                <div className="flex items-center gap-2">
                    <h2 className="font-bold text-white">
                        {index % 2 === 0 ? `Friend ${id}` : `TheGoatt`}
                    </h2>
                    <p className="text-white/40 text-xs">
                        {new Date().toLocaleString()}
                    </p>
                </div>
                <p>Welcome this is a message number {index}</p>
            </div>
        </div>
    );
};
