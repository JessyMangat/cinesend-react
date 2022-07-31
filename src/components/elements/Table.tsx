import React from 'react'

interface PropType {
    columns: Array<string>
}

const Table = (props: PropType) => {

    const { columns } = props

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