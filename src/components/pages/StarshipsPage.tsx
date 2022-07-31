import React from "react";
import Pagination from "../elements/Pagination";
import Table from "../elements/Table";

const StarshipsPage = () => {
    return (
        <>
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