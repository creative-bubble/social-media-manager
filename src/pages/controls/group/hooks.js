import { useState, useReducer } from 'react';
import GroupController from '../../../controllers/group.js';

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