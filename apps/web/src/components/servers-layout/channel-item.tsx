import { ChannelItemProps } from "@/types/servers";
import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { DiscordChannelSVG } from "../svgs/discord-channel";

export const ChannelItem: FC<ChannelItemProps> = ({ channel, serverId }) => {
    return (
        <div className="relative flex items-center gap-[8px]">
            <div className="flex h-2 w-1 items-center justify-center overflow-hidden rounded-full bg-white duration-100 group-hover:top-3 group-hover:h-6"></div>
            <Link
                to={`/app/channels/${serverId}/${channel.id}`}
                className="mr-[8px] flex w-full items-center gap-[8px] rounded-sm px-[8px] py-[8px] hover:bg-mainBlackHover"
            >
                <DiscordChannelSVG />
                <p>{channel.name}</p>
            </Link>
        </div>
    );
};
