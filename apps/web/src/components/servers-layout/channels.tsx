// import { isBasePath } from "@/lib/utils";
import { ChannelsProps } from "@/types/servers";
// import { useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { DiscordToggleDown } from "../svgs/discord-toggle-down";
import DeafenSVG from "../svgs/profile/deafen";
import DeafenDeafenedSVG from "../svgs/profile/deafen-deafened";
import MuteSVG from "../svgs/profile/mute";
import MuteMutedSVG from "../svgs/profile/mute-muted";
import SettingsSVG from "../svgs/profile/settings";
import { OnlineSVG } from "../svgs/status/online";
import { ChannelItem } from "./channel-item";

export const Channels: FC<ChannelsProps> = ({ server, user }) => {
    const { name, channels } = server;
    // const isBase = isBasePath(
    //     "/app/channels/$serverId/$channelId",
    //     useRouterState().location.pathname,
    // );

    const [isUserHovered, setIsUserHovered] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isDeafened, setIsDeafened] = useState(false);

    return (
        <div
            className={`flex w-full flex-col bg-zinc-800 text-white lg:w-80 ${window.innerWidth < 1024 ? "slide-in-from-right animate-in duration-700" : ""}`}
        >
            <header
                className={`flex h-12 w-full items-center justify-between border-b-[#000000] border-b-[1px] border-b-solid px-[16px] py-3`}
            >
                <div className="flex items-center gap-[8px]">
                    <div>
                        {/* <img src="/public/BotAvatar.png" alt="A" /> */}
                    </div>
                    <p>{name}</p>
                </div>
                <DiscordToggleDown />
            </header>

            <div className="custom-scrollbar flex h-[calc(100vh-56px-56px)] flex-1 flex-col overflow-y-auto py-[16px]">
                {Array.from({ length: 14 }).map((_, repeatIndex) => (
                    <React.Fragment key={repeatIndex}>
                        {channels.map((channel) => (
                            <ChannelItem
                                key={`${repeatIndex}-${channel.id}`} // Ensures unique key for each repeated channel item
                                channel={channel}
                                serverId={server.id}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            <div className="flex h-[56px] items-center gap-[8px] bg-[#000000] px-[8px] py-[4px]">
                <div
                    className="flex w-full items-center gap-[12px] rounded-sm hover:bg-mainBlackHover"
                    onMouseEnter={() => setIsUserHovered(true)}
                    onMouseLeave={() => setIsUserHovered(false)}
                >
                    <div className="relative h-fit w-fit shrink-0">
                        <img
                            src="https://placebear.com/200/200"
                            alt="A"
                            className="h-[32px] w-[32px] rounded-full"
                        />
                        <OnlineSVG
                            size={12}
                            className="absolute right-0 bottom-0 "
                        />
                    </div>
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                        <p>{user.username}</p>
                        {!isUserHovered ? (
                            <motion.p
                                key="status" // Key for Framer Motion to identify the element
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} // Exit animation
                                transition={{ duration: 0.3 }}
                            >
                                {user.status}
                            </motion.p>
                        ) : (
                            <motion.p
                                key="bio" // Key for Framer Motion to identify the element
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }} // Exit animation
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                {user.bio}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <button
                        className="group relative rounded-sm p-[8px] hover:bg-mainBlackHover"
                        onClick={() => setIsMuted((old) => !old)}
                    >
                        {isMuted ? (
                            <motion.div
                                // className="hidden group-hover:block"
                                key="muted" // Key for Framer Motion to identify the element
                                initial={{ opacity: 0 }} // Start hidden with opacity 0
                                animate={{ opacity: 1 }} // Fade in when hovered
                                exit={{ opacity: 0 }} // Fade out when not hovered
                                transition={{ duration: 0.3 }}
                            >
                                <MuteMutedSVG />
                            </motion.div>
                        ) : (
                            <motion.div
                                // className="group-hover:hidden"
                                key="initial" // Key for Framer Motion to identify the element
                                initial={{ opacity: 0 }} // Start with opacity 1
                                animate={{ opacity: 1 }} // Keep opacity 1 when visible
                                exit={{ opacity: 0 }} // Exit animation
                                transition={{ duration: 0.3 }}
                            >
                                <MuteSVG />
                            </motion.div>
                        )}
                        <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-120%] rounded-sm bg-mainBlack p-[4px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {isMuted ? "Unmute" : "mute"}
                        </div>
                    </button>
                    <button
                        className="group relative rounded-sm p-[8px] hover:bg-mainBlackHover"
                        onClick={() => setIsDeafened((old) => !old)}
                    >
                        {isDeafened ? (
                            <motion.div
                                // className="hidden group-hover:block"
                                key="muted" // Key for Framer Motion to identify the element
                                initial={{ opacity: 0 }} // Start hidden with opacity 0
                                animate={{ opacity: 1 }} // Fade in when hovered
                                exit={{ opacity: 0 }} // Fade out when not hovered
                                transition={{ duration: 0.3 }}
                            >
                                <DeafenDeafenedSVG />
                            </motion.div>
                        ) : (
                            <motion.div
                                // className="group-hover:hidden"
                                key="initial" // Key for Framer Motion to identify the element
                                initial={{ opacity: 0 }} // Start with opacity 1
                                animate={{ opacity: 1 }} // Keep opacity 1 when visible
                                exit={{ opacity: 0 }} // Exit animation
                                transition={{ duration: 0.3 }}
                            >
                                <DeafenSVG />
                            </motion.div>
                        )}

                        <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-120%] rounded-sm bg-mainBlack p-[4px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            {isDeafened ? "Undeaf" : "Deafen"}
                        </div>
                    </button>
                    <button className="group relative rounded-sm p-[8px] hover:bg-mainBlackHover">
                        <SettingsSVG />
                        <div className="absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-120%] rounded-sm bg-mainBlack p-[4px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Settings
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
