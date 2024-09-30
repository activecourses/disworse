import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
    component: () => <div>Hello /auth/register!</div>,
});
