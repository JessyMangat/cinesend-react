import React from "react";
import { useNavigate } from 'react-router-dom'

interface propTypes {
    title: string,
    image: string,
    altText: string,
    path: string,

}

const SelectionCard = (props: propTypes) => {

    const { title, image, altText, path } = props
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(path)
    }

    return (
        <div onClick={handleClick} className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 hover:cursor-pointer hover:bg-blue-100">
        <img src={image} alt={altText} className="w-64 h-64 mx-auto  aspect-square" />
        <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
            </div>
            <div className="flex justify-center pt-2 space-x-4 align-center">
               
            </div>
        </div>
    </div>
    )
}

export default SelectionCard