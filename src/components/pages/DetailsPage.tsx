import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Breadcrumb from "../elements/Breadcrumb";
import { BASE_PATH } from "../../constants";
import { Person, Planet, Starship } from "../../Types";

const DetailsPage = () => {
    const location = useLocation();
    const { data, status } = useQuery([location.pathname], (): Promise<Starship | Person | Planet> => axios.get(BASE_PATH + location.pathname).then(response => response.data))
    const [allFilms, setAllFilms] = useState([]);

    useEffect(() => {
        if (!data) return
        console.log(data.films)
        fetchFilmInfo(data.films)
    }, [data])

    function fetchFilmInfo(films: Array<string>){
        axios.all(films.map((url) => axios.get(url))).then(
            (res) => console.log(res)
        )
    }

    return (
        <>
            <Breadcrumb />
        </>
    )
}

export default DetailsPage