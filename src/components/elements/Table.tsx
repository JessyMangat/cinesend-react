import React, { useEffect } from 'react'
import usePaginatedDataFetch from '../../hooks/usePaginatedDataFetch'
import useTablePageStore from '../../store/useTablePageStore'
import { Starship } from '../../Types'

interface PropType {
    columns: Array<string>
    keys: Array<string>
    endpoint: string,
}

const Table = (props: PropType) => {

    const { columns, endpoint, keys } = props
    const pageNum = useTablePageStore(state => state.pageNum)
    const totalResults = useTablePageStore(state => state.totalResults)
    const setTotalResults = useTablePageStore(state => state.setTotalResults)
    const { data } = usePaginatedDataFetch(endpoint, pageNum.toString())


    useEffect(() => {
        console.log(data)
        if (data?.count && data.count !== totalResults) setTotalResults(data.count)

    }, [data])

    const generateRowData = () => {
        if (!data) return
        const objArray = data.results as Array<Starship>

        return objArray.map((obj) => {
            return <tr className="hover:bg-gray-100 cursor-pointer border-b">
                {keys.map((key) => {
                    return <td className="py-4 px-6 font-medium text-gray-900 ">{obj[key]}</td>
                })}
            </tr>
        })
    }

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
                    {generateRowData()}
                </tbody>
            </table>
        </div>
    )
}

export default Table