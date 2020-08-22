import React from 'react';
import { Hooks } from '../actions';
import GroupController from '../../../../controllers/group';

const CreateGroup = () => {
    const { inputs, updateInputs } = Hooks();
    const { postAddGroup } = GroupController;
    return(
        <div className="flex flex-col md:pl-6 pt-10">
            <label htmlFor="groupName">Name:</label>
            <input className="w-32 mt-1 border rounded focus:outline-none focus:border-blue-500" 
                    name="groupName"
                    id="groupName"
                    onChange={e => updateInputs('name', e.target.value)}>
            </input>
            <button type="submit" className="w-32 mt-2 rounded-md text-gray-300 bg-blue-500 hover:bg-blue-400 focus:outline-none focus:shadow-inner"
                    onClick={() => postAddGroup(inputs)}>Create</button>
        </div>
    );
}

export default CreateGroup;