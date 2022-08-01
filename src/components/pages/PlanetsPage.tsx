import React from "react";
import Breadcrumb from "../elements/Breadcrumb";
import Table from "../elements/Table";
import Pagination from "../elements/Pagination";

const PlanetsPage = () => {
    return (
        <>
        <Breadcrumb />
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