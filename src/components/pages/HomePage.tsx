import React from "react";
import SelectionCard from "../elements/SelectionCard";
import Hero from "../elements/Hero";

const HomePage = () => {

    return (
        <>
            <Hero
                text='Cinsend Senior React Developer Assessment' 
            />
            <div className="flex flex-row justify-center space-x-10">
                <SelectionCard
                    title="Starships"
                    image={require("../..//assets/images/starship_icon.svg").default}
                    altText="Image of a starship"
                    path="/starships"
                />
                <SelectionCard
                    title="Planets"
                    image={require("../../assets/images/planet_icon.svg").default}
                    altText="Image of a starship"
                    path="/planets"
                />
                <SelectionCard
                    title="Characters"
                    image={require("../../assets/images/character_icon.svg").default}
                    altText="Image of a starship"
                    path="/people"
                />
            </div>
        </>

    )
}

export default HomePage