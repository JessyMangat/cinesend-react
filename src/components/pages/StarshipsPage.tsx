import React from "react";
import Table from "../elements/Table";

const StarshipsPage = () => {
    return (
        <>
            <Table 
                columns={["Name", "Model", "Capacity", "Cost"]}
            />
        </>
    )
}

export default StarshipsPage