import { Sidebar } from "@/components/layouts/Sidebar";

export const AppRoot = () => {
    return (
        <>
            <Sidebar />
            <div className="flex h-screen flex-col items-center justify-center">
                <img
                    src="/disworse-logo.jpg"
                    alt="logo"
                    className="h-24 w-24"
                />
                <h1 className="mt-4 font-bold text-4xl text-foreground">
                    App Root
                </h1>
            </div>
        </>
    );
};