import React from "react";

interface PropType {
    title: string,
    director: string,
    opening_crawl: string,
}

const FilmCard = (props: PropType) => {

    const { title, director } = props;

    return (
        <>
            <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:bg-blue-100 hover:cursor-pointer">
                <div className="space-y-4 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
                        <p className="px-5 text-xs sm:text-base ">Directed By: {director}</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default FilmCard;