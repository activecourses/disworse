import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isBasePath(basePath: string, givenPath: string) {
    // Normalize paths by removing trailing slashes
    const normalizedBasePath = basePath.replace(/\/$/, "");
    const normalizedGivenPath = givenPath.replace(/\/$/, "");

    // Split the paths into segments
    const baseSegments = normalizedBasePath.split("/");
    const givenSegments = normalizedGivenPath.split("/");

    // If the number of segments doesn't match, it's not a valid match
    if (baseSegments.length !== givenSegments.length) {
        return false;
    }

    // Compare each segment, allowing dynamic parameters starting with '$'
    for (let i = 0; i < baseSegments.length; i++) {
        const baseSegment = baseSegments[i];
        const givenSegment = givenSegments[i];

        // If the base segment is dynamic (starts with '$'), we skip the comparison
        if (baseSegment.startsWith("$")) {
            continue; // Consider it a match for this segment
        }

        // If the segments do not match, return false
        if (baseSegment !== givenSegment) {
            return false;
        }
    }

    // If all segments match or dynamic segments are in place, return true
    return true;
}

export function checkChannel(url: string): boolean {
    // Define a regex pattern that matches URLs like:
    // /app/channels/{serverId}/{channelId} with optional query parameters
    const pattern = /^\/app\/channels\/(\d+)(\/(\d+))?(?:\?.*)?$/;

    const match = url.match(pattern);

    // If there's a match, check if both serverId and channelId are present
    // match[1] corresponds to serverId and match[3] corresponds to channelId
    return (
        match !== null &&
        typeof match[1] !== "undefined" &&
        typeof match[3] !== "undefined"
    );
}
