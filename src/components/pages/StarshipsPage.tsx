import React from "react";
import Breadcrumb from "../elements/Breadcrumb";
import Pagination from "../elements/Pagination";
import Table from "../elements/Table";

const StarshipsPage = () => {
    return (
        <>
        <Breadcrumb />
            <Table 
                columns={["Name", "Model", "Capacity", "Cost"]}
                keys={["name", 'model', 'cargo_capacity', "cost_in_credits"]}
                endpoint="/starships"
            />
            <Pagination />
        </>
    )
}

export default StarshipsPage