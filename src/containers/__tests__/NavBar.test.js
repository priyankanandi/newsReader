import React from 'react';
import { render } from '../../../tests/utils';
import NavBar from '../NavBar';

describe('<NavBar />', () => {
  test('renders without crush', () => {
    render(<NavBar />);
  });

  describe('on initial', () => {
    test('Render Header NavBar with content', () => {
      const { getByText, container } = render(<NavBar />);
      expect(getByText('News Reader')).toBeInTheDocument();
      expect(container.querySelector(".icon-newspaper")).toBeInTheDocument();
      expect(container.querySelector(".icon-home")).toBeInTheDocument();
    });
  });
});
