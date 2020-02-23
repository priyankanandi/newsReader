import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

//css
import './index.scss';

//component
import NewsContainer from './containers/NewsContainer';
import NavBar from './containers/NavBar';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <NavBar />
            <NewsContainer />
        </BrowserRouter>
    </Provider>,
global.document.getElementById('root'));
  