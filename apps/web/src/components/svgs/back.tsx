import React from "react";

const BackSVG = () => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 7 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(180deg)" }} // Apply rotation here
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.15919 0.602514C2.02112 0.46583 1.79728 0.46583 1.65921 0.602514C1.52115 0.739197 1.52115 0.960805 1.65921 1.09749L4.59104 4L1.65921 6.90251C1.52115 7.0392 1.52115 7.2608 1.65921 7.39749C1.79728 7.53417 2.02112 7.53417 2.15919 7.39749L5.34076 4.24773C5.34084 4.24765 5.34092 4.24757 5.34101 4.24749C5.47907 4.1108 5.47907 3.8892 5.34101 3.75251L2.15919 0.602514Z"
                fill="#DCDDDE"
            />
        </svg>
    );
};

export default BackSVG;
