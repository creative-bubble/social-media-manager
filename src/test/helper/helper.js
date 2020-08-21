import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from "history";
import { Router } from "react-router";
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