import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Breadcrumb from "../elements/Breadcrumb";
import { BASE_PATH } from "../../constants";
import { Person, Planet, Starship } from "../../Types";
import { Film } from "../../Types";
import FilmCard from "../elements/FilmCard";
import Hero from "../elements/Hero";
import Loading from "../elements/Loading";

const DetailsPage = () => {
    const location = useLocation();
    const { data, status } = useQuery([location.pathname], (): Promise<Starship | Person | Planet> => axios.get(BASE_PATH + location.pathname).then(response => response.data))
    const [allFilms, setAllFilms] = useState<Film[]>();
    const [filteredFilms, setFilteredFilms] = useState<Film[]>();

    useEffect(() => {
        const cachedFilms = localStorage.getItem("films");
        if (cachedFilms) {
            setAllFilms(JSON.parse(cachedFilms))
        }
        else {
            axios.get(BASE_PATH + "/films").then(response => {
                localStorage.setItem("films", JSON.stringify(response.data.results));
                setAllFilms(response.data.results);
            });
        }
    }, [])

    useEffect(() => {
        if (data && allFilms) {
            setFilteredFilms(allFilms.filter(film => data.films.includes(film.url)))
        }
    }, [data, allFilms])

    return (
        <>
            <Breadcrumb />
            {status === "loading" ?
                <Loading />
                :
                <>
                    <Hero
                        text={`${data?.name} appears in ${filteredFilms?.length} films.`}
                    />
                    <div className="flex flex-row justify-center space-x-10">

                        {filteredFilms?.map(film => {
                            return <FilmCard
                                key={film.url}
                                title={film.title}
                                director={film.director}
                                opening_crawl={film.opening_crawl}
                            />
                        })}
                    </div>
                </>
            }

        </>
    )
}

export default DetailsPage