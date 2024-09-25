import { Link } from "@/components/ui/link";

export const NotFoundRoute = () => {
    return (
        <>
            <div className="flex h-screen flex-col items-center justify-center">
                <img
                    src="/disworse-logo.jpg"
                    alt="logo"
                    className="h-24 w-24"
                />
                <h1 className="mt-4 font-bold text-4xl text-slate-900">
                    404 Not Found
                </h1>
                <p className="mt-4 text-center text-gray-600 text-lg">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    className="mt-4 text-center text-blue-600 text-lg"
                    to="/"
                    replace
                >
                    Go to Landing
                </Link>
            </div>
        </>
    );
};
