import React from 'react';
import { render, act } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes/main/index';



exports.renderWith = (route) => {
    const history = createMemoryHistory();
    history.push(route);
    const renderValue = render(
        <Router history={history}>
            <Routes />
        </Router>
    )
    renderValue.history = history;
    return renderValue;
};


exports.render = (Component) => {
    const renderValue = render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    )
    return renderValue;
};


exports.renderHook = (Hook) => {
    let results = {};
    const WrapperHook = () => {
        let val = Hook();
        Object.assign(results, val)
        return null;
    }
    render(<WrapperHook />);
    return results;
}


exports.mockFetch = (data) => {
    global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(data)
        })
    )
} 


exports.perform = async (cb, args, isAsync = false) => {
    if(!isAsync){
        act(() => {
            cb(...args);
        })
    }
    else{
       return await act( async () => {
            await cb(...args);
        })
    }
};