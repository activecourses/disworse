import { NavigateOptions } from "@tanstack/react-router";

type Navigate = (options: NavigateOptions) => Promise<void>;

export const oAuthSignIn = async (navigate: Navigate) => {
    await navigate({
        to: "/auth/register",
        search: { email: "amr@gmail.com" },
    });
};
