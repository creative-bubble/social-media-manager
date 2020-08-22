import { fireEvent } from '@testing-library/react';
import { renderWith } from '../helper/helper';


describe('Group Controls', () => {
    describe('Render', () => {
        it('Groups view', () => {
            const { getByText, asFragment } = renderWith('/group');
            //assertions
            getByText('Group Controls');
            expect(asFragment()).toMatchSnapshot('Controls-Group-View');
        });
    });

    describe('Click buttons', () => {
        it('Click "Create Group" should show input', () => {
            const { getByText } = renderWith('/group');
            fireEvent.click(getByText('Create Group'));
            //assertions
            getByText('Name:');
            getByText('Create');
        });

        it('Click "Group List" should show Group list in a table', () => {
            const { getByText } = renderWith('/group');
            fireEvent.click(getByText('Group List'));
            //assertions
            getByText('Group List:');
            getByText('Group Name');
        });
    });
});