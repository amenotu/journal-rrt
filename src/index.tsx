import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { reducer } from './reducers/index';
import { StoreState } from './types/index';
import App from './components/App';
import { Provider } from 'react-redux';
// import { string } from 'prop-types';
// import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore<StoreState>(reducer, {
    entries: [{date: '12', text: 'Whatever goes in here'}, {date: '12', text: 'Whatever goes in here'}]
  }, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
