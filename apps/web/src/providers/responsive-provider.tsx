import { ReactNode, createContext, useContext, useState } from "react";

type ResponsiveContextType = {
    isNavsOpen: boolean;
    openNavs: () => void;
    closeNavs: () => void;
};

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(
    undefined,
);

export const ResponsiveProvider = ({ children }: { children: ReactNode }) => {
    const [isNavsOpen, setIsNavsOpen] = useState(true);

    const openNavs = () => {
        setIsNavsOpen(true);
    };

    const closeNavs = () => {
        setIsNavsOpen(false);
    };

    return (
        <ResponsiveContext.Provider value={{ isNavsOpen, openNavs, closeNavs }}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsive = () => {
    const context = useContext(ResponsiveContext);

    if (!context) {
        throw new Error(
            "useResponsive must be used within a ResponsiveProvider",
        );
    }

    return context;
};
