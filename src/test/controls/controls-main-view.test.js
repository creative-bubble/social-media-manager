import { renderWith } from '../helper/helper';
import { fireEvent } from '@testing-library/react';


describe('Controls Main View', () => {
    it('Render Main view', () => {
        const { asFragment } = renderWith('/controls');
        //assertions
        expect(asFragment()).toMatchSnapshot('Controls-Main-View');
    });

    it('Click Group link button should render group content', () => {
        const { getByText, asFragment } = renderWith('/controls');
        fireEvent.click(getByText('Groups'));
        //assertions
        getByText('Group Controls');
        expect(asFragment()).toMatchSnapshot('Controls-Group-View');
    });
});