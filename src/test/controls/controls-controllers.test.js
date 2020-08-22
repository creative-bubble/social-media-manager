import React from 'react';
import GroupController from '../../controllers/group';
//mocks
import { cleanup } from '@testing-library/react';
import { mockFetch, renderHook, perform } from '../helper/helper';
import mockData from './mockData/controller-data';
import { toast } from 'react-toastify';
//Hooks
import { Hooks } from '../../pages/controls/group/actions';



afterEach(() => {
    jest.clearAllMocks();
    cleanup();
})



describe('Controls-Controllers', () => {

    const { postAddGroup, getGroups } = GroupController;

    describe('Group Controller', () => {
        describe('postAddGroup', () => {
            it('Create Group successfuly should show a toaster success', async () => {
                let spy = jest.spyOn(toast, 'success').mockImplementation(() => <h1>Mock Success Call Sample</h1>);
                mockFetch(mockData.postSuccess());
                await perform(postAddGroup, [{name: 'TestGroupName'}], true);
                //assertions
                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('Create Group Error should show a toaster Error', async () => {
                 let spy = jest.spyOn(toast, 'error').mockImplementation(() => <h1>Mock Error Call Sample</h1>);
                 mockFetch(mockData.postError());
                 await perform(postAddGroup, [{name: 'TestGroupName'}], true);
                //assertions
                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

        describe('getGroups', () => {
            it('Set the viewData hook to an array of records of group list', async () => {
                mockFetch(mockData.getSuccess());
                const results = renderHook(Hooks);
                await perform(getGroups, [results.setData], true);
                //assertions
                expect(results.viewData.length).toEqual(2);
            });
        });
    });
});