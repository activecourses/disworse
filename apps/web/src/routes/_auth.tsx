import {
    Outlet,
    createFileRoute,
    redirect,
    useRouter,
} from "@tanstack/react-router";

import { useAuth } from "@/providers/auth-provider";

export const Route = createFileRoute("/_auth")({
    beforeLoad: ({ context, location }) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({
                to: "/auth/login",
                search: {
                    redirect: location.href,
                },
            });
        }
    },
    component: AuthLayout,
});

function AuthLayout() {
    const router = useRouter();
    const navigate = Route.useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to logout?")) {
            auth.logout().then(() => {
                router.invalidate().finally(() => {
                    navigate({ to: "/" });
                });
            });
        }
    };

    return (
        <>
            <div className="fixed bottom-24 left-2 z-50 flex w-max justify-center justify-items-center gap-2 rounded-lg border border-slate-600 bg-secondary p-2 align-middle">
                Welcome back, {auth.user}!
                <button
                    type="button"
                    className="underline"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <Outlet />
        </>
    );
}
