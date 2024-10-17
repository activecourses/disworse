import replay from "@/assets/replay.svg";

export const MessageActions = ({
    reactHandler,
}: {
    reactHandler: Function;
}) => {
    const emojis = ["👍", "❤️", "😂", "😢", "😡"];

    return (
        <div className="flex items-center gap-1 rounded-lg bg-zinc-900/50 px-1 md:text-2xl">
            {emojis.map((emoji, index) => (
                <button
                    key={index}
                    className="rounded-lg p-0 hover:scale-105 hover:bg-zinc-800/50 md:p-1"
                    onClick={() => reactHandler(emoji)}
                >
                    {emoji}
                </button>
            ))}
            <button className="rounded-lg p-0 hover:scale-105 hover:bg-zinc-800/50 md:p-1">
                <img src={replay} alt="Replay" />
            </button>
        </div>
    );
};
