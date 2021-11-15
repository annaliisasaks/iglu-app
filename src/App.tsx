import React from 'react';
import './App.scss';
import './SCSS/Main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import AddPost from './components/Pages/AddPost';

const App = ():JSX.Element => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addpost" element={<AddPost />} />
      </Routes>

    </div>

  </BrowserRouter>
);

export default App;
