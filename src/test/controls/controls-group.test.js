import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { renderWith, perform, renderHook } from '../helper/helper';
//components of Group Content
import CreateGroup from '../../pages/controls/group/components/create-group';
import GroupController from '../../controllers/group';
import { Hooks } from '../../pages/controls/group/actions';

describe('Group Controls', () => {

    describe('Render', () => {
        it('Groups view', () => {
            const { getByText, asFragment } = renderWith('/group');
            //assertions
            getByText('Group Controls');
            expect(asFragment()).toMatchSnapshot('Controls-Group-View');
        });
    });

    describe('Click buttons', () => {   //covers the components cases inside actions.js
        it('Click "Create Group" should show input', () => {
            const { getByText } = renderWith('/group');
            //action
            fireEvent.click(getByText('Create Group'));
            //assertions
            getByText('Name:');
            getByText('Create');
        });

        it('Click "Group List" should show Group list and Group Name', () => {  //covers the updateView case inside actions.js
            const { getByText } = renderWith('/group');
            //action
            fireEvent.click(getByText('Group List'));
            //assertions
            getByText('Group List:');
            getByText('Group Name');
        });
    });

    describe('Components', () => {
        describe('Create-Group', () => {
            it('Input group name then submit. should call postAddGroup controller', async () => {  // also covers the updateInputs case inside actions.js
                const spy = jest.spyOn(GroupController, 'postAddGroup').mockImplementation((inputs) => inputs);
                const { getByLabelText, getByText } = render(<CreateGroup />);
                //action
                perform(fireEvent.change, [getByLabelText('Name:'), { target: { value: 'TestGroupName' } }]);
                await perform(fireEvent.click, [getByText('Create')], true);
                //assertion
                expect(spy).toHaveBeenCalledTimes(1);
                expect(spy).toHaveBeenCalledWith({ name: 'TestGroupName' });
            });
        });
    });

    describe('View-GroupList', () => {
        it('Click "Group List" should call getGroups controller', () => {
            const spy = jest.spyOn(GroupController, 'getGroups').mockImplementation((setViewData) => 'mock');
            const { getByText } = renderWith('/group');
            //action
            fireEvent.click(getByText('Group List'));
            //assertions
            getByText('Group List:');
            getByText('Group Name');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(typeof spy.mock.calls[0][0]).toEqual('function');   //called with setData hook
        });
    });

});