import React, { useReducer, useState } from 'react';
import Controls from '../main';
import GroupController from '../../../controllers/group.js';
import { Hooks } from './hooks';


function Group(){
    const [isCreate,setCreate] = useReducer(isCreate =>  (!isCreate) , false);
    const [view, setView] = useState(false);
    const [viewData,setData] = useState([]);
    const { inputs ,updateInputs } = Hooks();
    return(
        <>
        <Controls>
            <div className="w-6/12 ml-20 pt-10 border-b border-gray-500">
                <h2 className="md:pl-6 pt-10  text-sm md:text-2xl lg:text-4xl">Group Controls</h2>
            </div>
            <div className="relative w-full md:w-6/12 md:ml-20">
                <div className="flex flex-col md:pl-6 pt-16">
                    
                        <button className="py-1 w-40 bg-gray-300 border-b border-gray-500 shadow-inner cursor-pointer text-left focus:outline-none" 
                                onClick={setCreate}>
                            <i className="fa fa-plus pl-1" aria-hidden="true" /> Create Group
                        </button>
                        <button className="py-1 w-40 bg-gray-300 border-b border-gray-500 shadow-inner cursor-pointer text-left focus:outline-none"
                                onClick={() => {
                                    setView(!view)
                                    return GroupController.getGroups(setData)}}>
                            <i className="fa fa-users pl-1" aria-hidden="true" /> Group List
                        </button>
                </div>

                    {/* for Creating Group */}
                    {isCreate?
                    <div className="flex flex-col md:pl-6 pt-10">
                        <label htmlFor="groupName">Name:</label>
                        <input className="w-32 mt-1 border rounded focus:outline-none focus:border-blue-500" 
                               name="groupName"
                               id="groupName"
                               onChange={e => updateInputs('name', e.target.value)}>
                        </input>
                        <button type="submit" className="w-32 mt-2 rounded-md text-gray-300 bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-inner"
                                onClick={() => GroupController.postAddGroup(inputs)}>Create</button>
                    </div>:''}

                    {/* get Group List */}
                    {view?
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
                    :''}
            </div>
        </Controls>
        </>
    )
}

export default Group;