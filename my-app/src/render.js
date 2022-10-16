import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { state, updateNewPostText } from './redux/state';
import { addPost } from './redux/state';
const root = ReactDOM.createRoot(document.getElementById('root'));
export function rerenderEntireTree(){

    root.render(
        <React.StrictMode>
          <BrowserRouter>
            {/* <App 
              postsData={state.profilePage.postsData}
              dialogsData={state.profilePage.dialogsData}
              messagesData={state.messagesPage.messagesData}/> */}
            <App state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}/>
          </BrowserRouter>
        </React.StrictMode>
      );
};