import React from "react";
import Pagination from "../elements/Pagination";
import Table from "../elements/Table";

const StarshipsPage = () => {
    return (
        <>
            <Table 
                columns={["Name", "Model", "Capacity", "Cost"]}
            />
            <Pagination />
        </>
    )
}

export default StarshipsPage