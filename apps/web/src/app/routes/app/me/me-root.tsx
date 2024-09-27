import { DirectMessages } from "@/components/layouts/direct-messages";
import { Outlet } from "react-router-dom";

export const MeRoot = () => {
    return (
        <>
            <DirectMessages />
            <Outlet />
        </>
    );
};
