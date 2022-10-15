import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { state } from './redux/state';
import { addPost } from './redux/state';
// const root = ;
// addPost('proverka');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App 
        postsData={state.profilePage.postsData}
        dialogsData={state.profilePage.dialogsData}
        messagesData={state.messagesPage.messagesData}/> */}
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
