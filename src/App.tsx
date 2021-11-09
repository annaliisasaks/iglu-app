import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';

const App: React.FC = () => (
  <div className="App">
    <NavBar />
    <Content />
  </div>
);

export default App;
