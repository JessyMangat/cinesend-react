import React from "react";

const Loading = () => {
    return (
        <div className="flex items-center justify-center space-x-2 h-full w-full">
            <div className="w-16 h-16 rounded-full animate-pulse bg-violet-400"></div>
            <div className="w-16 h-16 rounded-full animate-pulse bg-violet-400"></div>
            <div className="w-16 h-16 rounded-full animate-pulse bg-violet-400"></div>
        </div>
    )
}

export default Loading