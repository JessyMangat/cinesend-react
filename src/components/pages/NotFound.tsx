import React from "react"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center h-full p-16">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl ">
                        <p>404</p>
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 ">Click below to return to the homepage.</p>
                    <button onClick={() => {navigate("/home")}} className="px-8 py-3 font-semibold rounded bg-gray-400 text-white ">Back to homepage</button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage