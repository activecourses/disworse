import React, { useState } from "react";
import { ChannelBar } from "./channel-bar";

const Chat = () => {
    const channel = {
        id: 1,
        name: "HTML",
        users: [
            {
                id: 1,
                username: "Amr Shoukry",
                profile_image_url: "https://placebear.com/200/200",
                status: "online",
            },
            {
                id: 2,
                username: "Moaz",
                profile_image_url: "https://placebear.com/200/200",
                status: "online",
            },
            {
                id: 3,
                username: "Ali",
                profile_image_url: "https://placebear.com/200/200",
                status: "offline",
            },
        ],
        messages: [
            {
                id: 1,
                user_image: "https://placebear.com/200/200",
                username: "Amr",
                timestamp: "Yesterday at 2:13 PM",
                content_string:
                    "Lorem ipsum dolor sit amet consectetur adipisicing.",
            },
            {
                id: 2,
                user_image: "https://placebear.com/200/200",
                username: "Ali",
                timestamp: "Yesterday at 2:15 PM",
                content_string:
                    "Lorem ipsum dolor sit consectetur adipisicing.",
            },
        ],
    };

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className="w-full bg-secondBlack">
                <ChannelBar setIsExpanded={setIsExpanded} />
                <div className="flex">
                    <div
                        className={`${isExpanded ? "hidden md:block md:w-full" : "w-full"}`}
                    >
                        <div className="custom-scrollbar flex h-[calc(100vh-56px-56px)] flex-col justify-end gap-[24px] overflow-y-auto px-[8px] py-[24px]">
                            {Array.from({ length: 10 }).map(
                                (_, repeatIndex) => (
                                    <React.Fragment key={repeatIndex}>
                                        {channel.messages.map((message) => (
                                            <div
                                                key={`${repeatIndex}-${message.id}`} // Ensures unique key for each repeated message item
                                                className="flex gap-[16px] rounded-sm p-[8px] hover:bg-[#2E3035]"
                                            >
                                                <div className="shrink-0">
                                                    <img
                                                        src={message.user_image}
                                                        alt=""
                                                        className="h-[48px] w-[48px] shrink-0 rounded-full"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex gap-[16px]">
                                                        <p>
                                                            {message.username}
                                                        </p>
                                                        <p className="text-gray-400">
                                                            {message.timestamp}
                                                        </p>
                                                    </div>
                                                    <p>
                                                        {message.content_string}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ),
                            )}
                        </div>

                        <div className="flex h-[56px] items-center justify-center ">
                            <textarea
                                className="custom-scrollbar h-[calc(100%-16px)] w-[95%] resize-none rounded-md bg-[#383a40] px-[16px] py-[4px]"
                                placeholder="Write your Message..."
                            ></textarea>
                        </div>
                    </div>
                    {isExpanded && (
                        <div className="custom-scrollbar h-[calc(100vh-56px)] w-full shrink-0 overflow-y-auto bg-secondBlack px-[8px] py-[24px] md:w-[232px]">
                            <h3 className="mb-[12px] px-[8px] text-[12px] text-gray-400">
                                ONLINE
                            </h3>
                            <div className="flex flex-col">
                                {channel.users
                                    .filter((user) => user.status === "online") // Filter for online users
                                    .map((user) => {
                                        return (
                                            <div
                                                key={user.id}
                                                className="flex w-full items-center gap-[16px] rounded-sm px-[8px] py-[8px] hover:bg-mainBlackHover"
                                            >
                                                <div className="w-[40px] shrink-0 overflow-hidden">
                                                    <img
                                                        src={
                                                            user.profile_image_url
                                                        }
                                                        className="h-[40px] w-[40px] shrink-0 rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                    {user.username}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>

                            {/* Offline users */}
                            <h3 className="mt-[24px] mb-[12px] px-[8px] text-[12px] text-gray-400">
                                OFFLINE
                            </h3>
                            <div className="flex flex-col">
                                {channel.users
                                    .filter((user) => user.status === "offline") // Filter for offline users
                                    .map((user) => {
                                        return (
                                            <div
                                                key={user.id}
                                                className="flex w-full items-center gap-[16px] rounded-sm px-[8px] py-[8px] opacity-30 hover:bg-mainBlackHover hover:opacity-100"
                                            >
                                                <div className="w-[40px] shrink-0 overflow-hidden">
                                                    <img
                                                        src={
                                                            user.profile_image_url
                                                        }
                                                        className="h-[40px] w-[40px] shrink-0 rounded-full"
                                                        alt=""
                                                    />
                                                </div>
                                                <p>{user.username}</p>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Chat;
