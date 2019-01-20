import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';


ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root') as HTMLElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

