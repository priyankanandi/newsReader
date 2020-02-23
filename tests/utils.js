/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-indent */

// test-utils.js
require('dotenv-flow').config();
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { store } from '../src/store/configureStore';

  const reduxRender = (node, options = {}) => {
   return render(
       <Provider store={options.store || store}>
        {node}
      </Provider>,
      options
    );
  };

const customRender = (node, options = {}) => reduxRender(node, options);

const renderWithRouter = (ui, { route = '/', ...renderOptions } = {}) => {
  const history = createMemoryHistory({ initialEntries: [route] });
  const utils = reduxRender(
    <Router history={history}>
      <Route path={route}>{ui}</Route>
    </Router>,
    renderOptions
  );
  return {
    ...utils,
    history,
  };
};
// re-export everything
export * from '@testing-library/react';
export * from '@testing-library/jest-dom/extend-expect';
// override render method
export { customRender as render, renderWithRouter, store };
