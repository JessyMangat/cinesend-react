import React, { useEffect, useState } from "react";
import useTablePageStore from "../../store/useTablePageStore";
function Pagination() {

    const pageNum = useTablePageStore(state => state.pageNum)
    const setPageNum = useTablePageStore(state => state.setPageNum)
    const totalResults = useTablePageStore(state => state.totalResults)
    const [entriesRange, setEntriesRange] = useState([1, 10])

    useEffect(() => {
        calculateNewEntriesRange()
    }, [pageNum, totalResults])

    function calculateNewEntriesRange(){
        let upperRange;
        if(pageNum * 10 >= totalResults) upperRange = totalResults
        else upperRange = pageNum * 10
        const lowerRange = pageNum * 10 - 9
        setEntriesRange([lowerRange, upperRange])
    }

    function changePage(shouldIncrement: boolean){
        if(!shouldIncrement && pageNum === 1) return
        if(shouldIncrement && pageNum * 10 > totalResults) return
        shouldIncrement ? setPageNum(pageNum + 1) : setPageNum(pageNum - 1)
    }


    return (
        <div className="Pagination">
            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 ">
                    Showing <span className="font-semibold text-gray-900 ">{entriesRange[0]}</span> to <span className="font-semibold text-gray-900 ">{entriesRange[1]}</span> of <span className="font-semibold text-gray-900 ">{totalResults}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button onClick={() => changePage(false)} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900">
                        Prev
                    </button>
                    <button onClick={() => changePage(true)} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 ">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pagination