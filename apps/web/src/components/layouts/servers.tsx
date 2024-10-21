import { checkChannel } from "@/lib/utils";
import { useRouter } from "@tanstack/react-router";
import { Channels } from "../servers-layout/channels";
import Chat from "../servers-layout/chat";
import { Sidebar } from "./sidebar";

export const Servers = () => {
    const user = {
        id: 1,
        username: "Amr",
        profile_image_url: "https://placebear.com/200/200",
        bio: "#AmrShoukry",
        status: "online",
    };

    const server = {
        id: 1,
        name: "Active Courses",
        image_url: "https://placebear.com/200/200",
        channels: [
            {
                id: 1,
                name: "HTML",
                users: [
                    {
                        id: 1,
                        username: "Amr",
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
            },
            {
                id: 2,
                name: "CSS",
                users: [
                    {
                        id: 1,
                        username: "Amr",
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
                        username: "Moaz",
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
            },
        ],
    };

    const router = useRouter();
    const currentUrl = router.state.location.pathname;
    const isChannel = checkChannel(currentUrl);

    // Listen for route changes and update state accordingly

    return (
        <div className="flex overflow-hidden">
            <Sidebar />
            <Channels server={server} user={user} />
            {isChannel ? (
                <Chat />
            ) : (
                <p className="hidden w-full items-center justify-center bg-mainBlackHover md:flex">
                    Please Select A Channel To Continue
                </p>
            )}
        </div>
    );
};
