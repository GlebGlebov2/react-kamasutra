
import './App.css';

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {


  return (
    
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <Routes>
            <Route path="/dialogs/*" element= {
              <Dialogs state={props.state.messagesPage} 
              store={props.store}/>}/>
            <Route path="/profile" element= { 
              <Profile state={props.state.profilePage} 
              addPost={props.addPost}
              dispatch={props.dispatch}/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;
