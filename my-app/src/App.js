
import './App.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { state } from './redux/state';

function App(props) {

  
  return (
    
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Routes>

            {/* <Route path="/profile" element={<Profile/>}/> */}
            {/* <Route path="/dialogs/*" element={<Dialogs/>}/> */}
            {/* <Route path="/dialogs/*" element= {
              <Dialogs 
                dialogsData = {props.state.messagesPage.dialogsData} 
                messagesData = {props.state.messagesPage.messagesData} />
            }/>
            <Route path="/profile" element= { 
              <Profile 
                postsData = {props.state.profilePage.postsData} />
            } /> */}
            <Route path="/dialogs/*" element= {
              <Dialogs state={props.state.messagesPage} />}/>
            <Route path="/profile" element= { 
              <Profile state={props.state.profilePage} />} />

        </Routes>
      </div>
    </div>

  );
}

export default App;
