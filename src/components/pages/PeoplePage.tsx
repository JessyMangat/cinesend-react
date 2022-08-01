import React from "react";
import Breadcrumb from "../elements/Breadcrumb";
import Pagination from "../elements/Pagination";
import Table from "../elements/Table";

const PeoplePage = () => {
    return (
        <>
            <Breadcrumb />
            <Table
                columns={["Name", "Gender", "Hair Color", "Weight", "height"]}
                keys={["name", 'gender', 'hair_color', "mass", "height"]}
                endpoint="/people"
            />
            <Pagination />
        </>
    )
}

export default PeoplePage