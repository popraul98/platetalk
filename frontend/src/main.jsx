import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; // Dacă folosești React Router

import './index.css'
import App from './App.jsx'

import {store, persistedStore} from './app/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('platetalk-app'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <App/>
            </PersistGate>    
        </Provider>
    </BrowserRouter>
);