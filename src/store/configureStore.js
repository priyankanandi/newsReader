import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reducers from '../reducers/index.js';
import ReduxThunk from 'redux-thunk';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = compose(applyMiddleware(ReduxThunk))(createStore)(
  reducers
);
  
