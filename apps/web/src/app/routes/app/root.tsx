import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/layouts/sidebar";

export const AppRoot = () => {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
};
