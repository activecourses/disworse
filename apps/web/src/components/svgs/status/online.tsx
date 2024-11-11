import { FC } from "react";

interface OnlineSVGProps {
    size?: number;
    className?: string;
}

export const OnlineSVG: FC<OnlineSVGProps> = ({ size, className }) => {
    return (
        <>
            <svg
                width={size || 20}
                height={size || 21}
                viewBox="0 0 20 21"
                fill="none"
                className={className || ""}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="10" cy="10.5" r="10" fill="#18191C" />
                <path
                    d="M15.8707 10.5677C15.8707 13.8815 13.1844 16.5677 9.87073 16.5677C6.55702 16.5677 3.87073 13.8815 3.87073 10.5677C3.87073 7.25404 6.55702 4.56775 9.87073 4.56775C13.1844 4.56775 15.8707 7.25404 15.8707 10.5677Z"
                    fill="#3BA55C"
                />
            </svg>
        </>
    );
};
