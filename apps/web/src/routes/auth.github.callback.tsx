import GitHubCallback from "@/features/auth/components/github-callback";
import { createFileRoute, redirect } from "@tanstack/react-router";
import * as z from "zod";

export const Route = createFileRoute("/auth/github/callback")({
    component: githubcallback,
    validateSearch: z.object({
        code: z.string().optional().catch(""),
    }),
    beforeLoad: ({ context }) => {
        if (context.auth.isAuthenticated) {
            throw redirect({ to: "/app" });
        }
    },
});

function githubcallback() {
    return <GitHubCallback />;
}
