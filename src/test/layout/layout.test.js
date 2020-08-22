import { render } from '../helper/helper';
import { fireEvent } from '@testing-library/react';
import Navbar from '../../layout/navbar/index';
import Contact from '../../layout/contact/index';


describe('layouts', () => {
    describe('Navbar', () => {
        it('Render Navbar', () => {
            const { asFragment } = render(Navbar);
            //assertions
            expect(asFragment()).toMatchSnapshot('Navbar-layout');
        });
    
        it('Navbar User button', () => {
            const { getByTestId, getByText, asFragment } = render(Navbar);
            fireEvent.click(getByTestId('user-button'));
            //assertions
            getByText('Profile');
            expect(asFragment()).toMatchSnapshot('Navbar-layout-click-user-button');
        });
    });
    
    describe('Contact', () => {
        it('Render Contact', () => {
            const { asFragment } = render(Contact);
            //assertions
            expect(asFragment()).toMatchSnapshot('Contact-layout');
        }); 
    });

    describe('Footer', () => {
        it('Render Footer', () => {
            const { asFragment } = render(Contact);
            //assertions
            expect(asFragment()).toMatchSnapshot('Footer-layout');
        }); 
    });
});