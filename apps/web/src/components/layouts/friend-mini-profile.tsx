import { Logo } from "@/components/ui/logo";

export const FriendMiniProfile = ({ id }: { id: number }) => {
    return (
        <aside className="hidden w-2/5 flex-col justify-between bg-zinc-900 lg:flex">
            <div>
                <div className="h-20 w-full bg-slate-700"></div>
                <div className="flex cursor-pointer flex-col gap-4 p-4">
                    <Logo
                        alt="Friend"
                        className="-mt-10 h-20 w-20 rounded-full bg-black p-3 hover:rounded-full hover:opacity-80"
                    />

                    <h2 className="font-bold text-2xl text-white hover:underline">
                        Friend Number {id}
                    </h2>
                    <p className="text-white/80 hover:underline">
                        username {id}
                    </p>
                    <div className="mx-auto w-5/6 cursor-default rounded-lg bg-zinc-950 p-2">
                        <p>Member Since</p>
                        <p className="mt-4 text-white/80">
                            {new Date().toDateString()}
                        </p>
                    </div>
                </div>
            </div>

            <p className="cursor-pointer border-t-2 p-4 text-center">
                View Full Profile
            </p>
        </aside>
    );
};
