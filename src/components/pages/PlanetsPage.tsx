import React from "react";
import Table from "../elements/Table";
import Pagination from "../elements/Pagination";

const PlanetsPage = () => {
    return (
        <>
        <Table 
            columns={["Name", "Population", "Terrain", "Climate"]}
            keys={["name", 'population', 'terrain', "climate"]}
            endpoint="/planets"
        />
        <Pagination />
    </>
    )
}

export default PlanetsPage