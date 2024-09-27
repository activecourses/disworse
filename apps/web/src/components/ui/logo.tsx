import { cn } from "@/lib/utils";
import discordLogoWhite from "../../assets/discord-logo-white.svg";

export const Logo = ({ className = "", alt = "Discord Logo" }) => {
    return (
        <img
            src={discordLogoWhite}
            alt={alt}
            className={cn(
                "h-12 w-12 cursor-pointer rounded-full hover:rounded-lg",
                className,
            )}
        />
    );
};
