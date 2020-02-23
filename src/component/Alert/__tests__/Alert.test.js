import React from 'react';
import { render } from '../../../../tests/utils';
import Alert from '../Alert';

describe('<Alert />', () => {
  test('renders without crush', () => {
    render(<Alert />);
  });

  describe('on initial', () => {
    test('Render is-danger for alert massage by default', () => {
      const { container } = render(<Alert />);
      expect(container.querySelector(".is-danger")).toBeInTheDocument();
    });
  });

  describe('on message', () => {
    test('Render is-danger for the message', () => {
      const { getByText, container } = render(<Alert message='No data'/>);
      expect(getByText("No data")).toBeInTheDocument();
      expect(container.querySelector(".is-danger")).toBeInTheDocument();
    });
  });

  describe('on message with type', () => {
    test('Render success class for the message', () => {
      const { getByText, container } = render(<Alert message='successful' type='success'/>);
      expect(getByText("successful")).toBeInTheDocument();
      expect(container.querySelector(".is-success")).toBeInTheDocument();
    });
  });
});
