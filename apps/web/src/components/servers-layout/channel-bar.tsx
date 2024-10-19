import { Link } from "@tanstack/react-router";
import React, { FC } from "react";
import BackSVG from "../svgs/back";
import BellMutedSVG from "../svgs/channel-bar/bell-muted";
import ChannelSVG from "../svgs/channel-bar/channel";
import HelpSVG from "../svgs/channel-bar/help";
import InboxSVG from "../svgs/channel-bar/inbox";
import PinSVG from "../svgs/channel-bar/pin";
import ThreadsSVG from "../svgs/channel-bar/threads";
import UsersSVG from "../svgs/channel-bar/users";

interface ChannelBarProps {
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChannelBar: FC<ChannelBarProps> = ({ setIsExpanded }) => {
    const serverId = 1;
    return (
        <div className="custom-scrollbar flex h-[56px] items-center justify-between gap-[8px] overflow-x-auto border-b-[#000] border-b-[1px] border-b-solid bg-secondBlack px-[16px]">
            <div className="flex items-center gap-[8px]">
                <Link to={`/app/channels/${String(serverId)}`}>
                    <BackSVG />
                </Link>
                <ChannelSVG />
                <p>Name</p>
            </div>
            <div className="flex items-center gap-[16px]">
                <ThreadsSVG />
                <BellMutedSVG />
                <PinSVG />
                <button onClick={() => setIsExpanded((old) => !old)}>
                    <UsersSVG />
                </button>
                <input
                    type="text"
                    className="h-[24px] rounded-sm bg-[#000] px-[4px] py-[8px] text-[12px]"
                    placeholder="Search"
                />
                <InboxSVG />
                <HelpSVG />
            </div>
        </div>
    );
};
