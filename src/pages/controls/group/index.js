import React from 'react';
import Controls from '../main';
import { Hooks, Components } from './actions';


function Group(){
    const { view, updateView, viewData, isCreate, setCreate } = Hooks();
    const { ShowCreateGroup, ShowGroupList } = Components();
    return(
        <>
        <Controls>
            <div className="w-6/12 ml-20 pt-10 border-b border-gray-500">
                <h2 className="md:pl-6 pt-10  text-sm md:text-2xl lg:text-4xl">Group Controls</h2>
            </div>
            
            {/* buttons */}
            <div className="relative w-full md:w-6/12 md:ml-20">
                <div className="flex flex-col md:pl-6 pt-16">
                    
                        <button className="py-1 w-40 bg-gray-300 border-b border-gray-500 shadow-inner cursor-pointer text-left focus:outline-none" 
                                onClick={setCreate}>
                            <i className="fa fa-plus pl-1" aria-hidden="true" /> Create Group
                        </button>
                        <button className="py-1 w-40 bg-gray-300 border-b border-gray-500 shadow-inner cursor-pointer text-left focus:outline-none"
                                onClick={() => updateView()}>
                            <i className="fa fa-users pl-1" aria-hidden="true" /> Group List
                        </button>
                </div>

                {/* for Creating Group */}
                <ShowCreateGroup isCreate={isCreate} />

                {/* get Group List */}
                <ShowGroupList view={view} viewData={viewData}/>
            </div>
        </Controls>
        </>
    )
}

export default Group;