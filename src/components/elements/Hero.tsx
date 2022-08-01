import React from "react";

interface PropType {
    text: string | undefined
}

const Hero = (props: PropType) => {

    const { text } = props;
    return (
        <section>
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">{text}</h1>
            </div>
        </section>
    )
}

export default Hero