/**
 * Created by Oleksii on 30.01.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'


const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount-point')
);