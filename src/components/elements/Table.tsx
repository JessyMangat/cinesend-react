import React, { useEffect } from 'react'
import usePaginatedDataFetch from '../../hooks/usePaginatedDataFetch'
import useTablePageStore from '../../store/useTablePageStore'

interface PropType {
    columns: Array<string>
}

const Table = (props: PropType) => {

    const { columns } = props
    const pageNum = useTablePageStore(state => state.pageNum)
    const totalResults = useTablePageStore(state => state.totalResults)
    const setTotalResults = useTablePageStore(state => state.setTotalResults)
    const { data } = usePaginatedDataFetch("/starships", pageNum.toString())


    useEffect(() => {
        console.log(data)
        if (data?.count && data.count !== totalResults) setTotalResults(data.count)
        
    }, [data])

    return (
        <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 min-h-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            {columns.map((title) => {
                                return <th scope="col" className="py-3 px-6" key={title}>{title}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
    )
}

export default Table