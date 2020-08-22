import React from 'react';



const GroupList = ({viewData}) => {
    return(
        <div className="mt-8 w-full md:w-103 border border-gray-600 shadow-inner">
            <label>Group List:</label>
            <div className="h-56 w-full overflow-auto whitespace-normal">
                <table className="w-full text-xs table-fixed">
                    <thead className="w-full  text-xs sm:text-sm md:text-md text-gray-400 shadow-inner bg-gray-700">
                        <tr>
                            <th>Group Name</th>
                            <th>Date Created</th>
                            <th>Date Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewData.map(data => (
                                <tr key={data.id}>
                                    <td className="text-center">{data.name}</td>
                                    <td className="text-center">{data.createdAt}</td>
                                    <td className="text-center">{data.updatedAt}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GroupList;