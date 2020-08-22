import React from 'react';

export const Hooks = () => {
    const [isOpenNav, toggleNav] = React.useReducer(isOpenNav => !isOpenNav, false);
    const [isOpenUser, toggleUser] = React.useReducer(isOpenUser => !isOpenUser, false);
    return {isOpenNav, toggleNav, isOpenUser, toggleUser};
};