import { Logo } from "@/components/ui/logo";

export const Sidebar = () => {
    return (
        <nav className="scrollbar-none scrollbar-hide fixed h-full w-20 overflow-y-auto bg-zinc-900">
            {/* Dashboard */}
            <div className="flex items-center justify-center border-white border-b border-opacity-50 py-2">
                <Logo alt="Dashboard" />
            </div>
            {/* Servers */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={index}
                        className="group relative flex w-full items-center justify-center"
                    >
                        <Logo alt="server" />
                        {/* Notifcation */}
                        <div className="absolute top-1/3 left-0 flex h-2 w-1 items-center justify-center overflow-hidden rounded-full bg-white duration-100 group-hover:top-3 group-hover:h-6"></div>
                    </div>
                ))}
            </div>
        </nav>
    );
};
