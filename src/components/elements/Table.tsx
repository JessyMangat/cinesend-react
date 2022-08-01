import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import usePaginatedDataFetch from '../../hooks/usePaginatedDataFetch'
import useTablePageStore from '../../store/useTablePageStore'
import { Starship } from '../../Types'
import SkeletonTable from '../skeletons/SkeletonTable'
import Loading from './Loading'

interface PropType {
    columns: Array<string>
    keys: Array<string>
    endpoint: string,
}

const Table = (props: PropType) => {

    const { columns, endpoint, keys } = props
    const pageNum = useTablePageStore(state => state.pageNum)
    const setPageNum = useTablePageStore(state => state.setPageNum)
    const totalResults = useTablePageStore(state => state.totalResults)
    const setTotalResults = useTablePageStore(state => state.setTotalResults)
    const { data, status } = usePaginatedDataFetch(endpoint, pageNum.toString())
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        setPageNum(1)
    }, [])

    useEffect(() => {
        if (data?.count && data.count !== totalResults) setTotalResults(data.count)
    }, [data])


    const generateRowData = () => {
        if (!data) return

        return data.results.map((obj) => {
            return <tr onClick={() => { navigate(location.pathname + "/" + extractIdFromUrl(obj.url)) }} className="hover:bg-gray-100 cursor-pointer border-b" key={obj.url}>
                {keys.map((key, idx) => {
                    return <td className="py-4 px-6 font-medium text-gray-900" key={idx}>{obj[key]}</td>
                })}
            </tr>
        })
    }

    const extractIdFromUrl = (url: string): string => {
        let id = url.replace(/\D/g, ""); //return only the number characters from the string
        return id
    }

    return (
        <>
            <div className="overflow-x-auto relative ">
                {status === "loading" ? <SkeletonTable /> :
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
                }


            </div>
        </>
    )
}

export default Table