import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [breadcrumb, setBreadcrumb] = useState([""])

    useEffect(() => {
        const breadcrumbs = location.pathname.split("/").filter(Boolean) //take pathname and split it into an array of strings
        setBreadcrumb(breadcrumbs)
    }, [])

    const generatePath = (index: number) => {
        let path = "/"
        for(let i = 0; i <= index; i++){
            path += breadcrumb[i]
            if(i !== index){
                path += "/"
            }
        }
        navigate(path)
    }

    return (
        <nav aria-label="breadcrumb" className="w-full p-4">
            <ol className="flex h-8 space-x-4">

                <li className="flex items-center">
                    <button onClick={() => navigate("/")} className="hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pr-1 dark:text-gray-400">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                        </svg>
                    </button>
                </li>
                {breadcrumb.map((crumb, index) => (
                    <li className="flex items-center space-x-4" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor" className="w-2 h-2 mt-1 transform rotate-90 fill-current">
                            <path d="M32 30.031h-32l16-28.061z"></path>
                        </svg>
                        <button onClick={() => generatePath(index)} className="flex items-center hover:underline">{crumb.toUpperCase()}</button>
                    </li>
                ))}

            </ol>
        </nav>
    )
}

export default Breadcrumb