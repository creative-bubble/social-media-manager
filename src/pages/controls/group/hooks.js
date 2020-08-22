import { useState } from 'react';


export const Hooks = () => {
    const [inputs, setInputs] = useState({});

    const updateInputs = (name, value) => {
        let newValue = {};
        newValue[name] = value;
        setInputs(newValue);
    }


    return {inputs ,updateInputs};
}