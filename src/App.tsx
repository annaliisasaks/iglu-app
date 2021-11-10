import React from 'react';
import './App.scss';
import './SCSS/Main.scss';
import NavBar from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/Sidebar/SideBar';

const App = ():JSX.Element => (
  <div className="App">
    <NavBar />
    <div className="content">
      <Main />
      <SideBar />
    </div>
  </div>
);

export default App;
