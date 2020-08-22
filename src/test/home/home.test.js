import { renderWith } from '../helper/helper';

describe('Suite === Home Page', () => {
  describe('Rendering', ()  => {
    it('Render whole page of Home', () => {
      const { asFragment } = renderWith('/');
      //assertions
      expect(asFragment()).toMatchSnapshot('Home-Page');
    });
  });
});

