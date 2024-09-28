import { Link, RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "@/routeTree.gen";

// Create a new router instance
const router = createRouter({
    routeTree,
    defaultNotFoundComponent: () => (
        <div className="flex h-screen flex-col items-center justify-center">
            <img src="/disworse-logo.jpg" alt="logo" className="h-24 w-24" />
            <h1 className="mt-4 font-bold text-4xl text-foreground">
                404 Not Found
            </h1>
            <p className="mt-4 text-center text-lg text-secondary-foreground">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                className="mt-4 text-center text-lg text-muted-foreground hover:text-accent-foreground"
                to="/"
                replace
            >
                Go to Landing
            </Link>
        </div>
    ),
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
