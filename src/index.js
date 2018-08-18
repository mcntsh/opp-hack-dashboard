import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleware = [ thunk ];

const store = createStore(
    reducers,
    {},
    composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store="store">
        <App />
    </Provider>,
    document.getElementById('root')
);
