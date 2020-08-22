import React, { useState, useReducer } from 'react';
import GroupController from '../../../controllers/group.js';
//components
import CreateGroup from './components/create-group';
import GroupList from './components/view-grouplist';


export const Hooks = () => {
    const [inputs, setInputs] = useState({});
    const [view, setView] = useState(false);
    const [viewData,setData] = useState([]);
    const [isCreate,setCreate] = useReducer(isCreate =>  (!isCreate) , false);
 
    const updateInputs = (name, value) => {
        let newValue = {};
        newValue[name] = value;
        setInputs(newValue);
    };

    const updateView = () => {
        let newView = !view;
        setView(newView);
        if(newView)
            GroupController.getGroups(setData);
    };

    return {inputs ,updateInputs, view, updateView, isCreate, setCreate, viewData, setData};
}

export const Components = () => {
    
    const ShowCreateGroup = ({isCreate}) => {
        if(isCreate)
            return(<CreateGroup />);
        else
            return(null);
    }

    const ShowGroupList = ({view, viewData}) => {
        if(view)
            return(<GroupList viewData={viewData} />)
        else   
            return null;
    }

    return { ShowCreateGroup, ShowGroupList };
}