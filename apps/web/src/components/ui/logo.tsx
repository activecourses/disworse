import { cn } from "@/lib/utils";
import discordLogoWhite from "../../assets/discord-logo-white.svg";

export const Logo = ({
    className = "",
    alt = "Discord Logo",
    pathname = "",
    path = "",
}) => {
    return (
        <img
            src={discordLogoWhite}
            alt={alt}
            className={cn(
                `${pathname.startsWith(path) ? "hover:rounded-full" : "hover:rounded-lg"}`,
                "h-12 w-12 cursor-pointer rounded-full",
                className,
            )}
        />
    );
};
