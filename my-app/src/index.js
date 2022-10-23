import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';


import './index.css';

import reportWebVitals from './reportWebVitals';

// import {rerenderEntireTree} from './render'

const root = ReactDOM.createRoot(document.getElementById('root'));
function rerenderEntireTree(state){

    root.render(
        <React.StrictMode>
          <BrowserRouter>
            <App state={state}
            dispatch={store.dispatch.bind(store)}
            store={store}/>
          </BrowserRouter>
        </React.StrictMode>
      );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
