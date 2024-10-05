import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useAuth } from "@/providers/auth-provider";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: LandingRoute,
});

function LandingRoute() {
    const auth = useAuth();

    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center">
                <Logo alt="Logo" className="h-24 w-24" />
                <h1 className="mt-4 font-bold text-4xl text-foreground">
                    App Landing
                </h1>
                {auth.isAuthenticated ? (
                    <div className="mt-8 text-center text-sm">
                        <p className="mb-4 text-center text-lg text-secondary-foreground">
                            Welcome back, {auth.user}!
                        </p>
                        <Button>
                            <Link to="/app">Go to App</Link>
                        </Button>
                        <Button className="ml-2" onClick={() => auth.logout()}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <div className="mt-8 text-center text-sm">
                        <Button>
                            <Link to="/auth/login">Login</Link>
                        </Button>
                        <Button className="ml-2">
                            <Link to="/auth/register">Register</Link>
                        </Button>
                    </div>
                )}
            </div>
        </>
    );
}
