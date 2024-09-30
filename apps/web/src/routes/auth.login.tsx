import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
    component: () => <div>Hello /auth/login!</div>,
});
