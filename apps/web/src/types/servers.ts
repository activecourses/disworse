export interface UserProps {
    id: number;
    username: string;
    profile_image_url: string;
    bio?: string; // Optional bio field, as it's not always present in nested users
    status: string;
}

// Message type definition
export interface MessageProps {
    id: number;
    user_image: string;
    username: string;
    timestamp: string;
    content_string: string;
}

// Channel type definition
export interface ChannelProps {
    id: number;
    name: string;
    users: UserProps[]; // Array of users
    messages: MessageProps[]; // Array of messages
}

// Server type definition
export interface ServerProps {
    id: number;
    name: string;
    image_url: string;
    channels: ChannelProps[]; // Array of channels
}

export interface ChannelsProps {
    server: ServerProps;
    user: UserProps;
}

export interface ChannelItemProps {
    channel: ChannelProps;
    serverId: number;
}
