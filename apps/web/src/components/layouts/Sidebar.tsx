export const Sidebar = () => {
    return (
        <nav className="scrollbar-none scrollbar-hide fixed h-full w-20 overflow-y-auto bg-gradient-to-t from-slate-800 to-slate-950">
            {/* Dashboard */}
            <div className="flex items-center justify-center border-gray-600 border-b py-2">
                <img
                    className="h-12 w-12 cursor-pointer rounded-full hover:rounded-lg"
                    src="/disworse-logo.jpg"
                    alt="Dashboard"
                />
            </div>
            {/* Servers */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4">
                {Array.from({ length: 20 }).map((_, index) => (
                    <div
                        key={index}
                        className="group relative flex w-full items-center justify-center"
                    >
                        <img
                            src="/disworse-logo.jpg"
                            alt="server"
                            className="h-12 w-12 cursor-pointer rounded-full"
                        />

                        {/* Notifcation */}
                        <div className="absolute top-1/3 left-0 flex h-2 w-1 items-center justify-center overflow-hidden rounded-full bg-white duration-100 group-hover:top-3 group-hover:h-6"></div>
                    </div>
                ))}
            </div>
        </nav>
    );
};
