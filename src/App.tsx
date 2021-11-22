import React from 'react';
import './App.scss';
import './SCSS/Main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import GalleryPage from './Pages/GalleryPage/GalleryPage';
import AddPostPage from './Pages/AddPostPage/AddPostPage';
import PostDetailsPage from './Pages/PostDetailsPage/PostDetailsPage';
import EditPostPage from './Pages/EditPostPage/EditPostPage';

const App = ():JSX.Element => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
        <Route path="/post/add" element={<AddPostPage />} />
        <Route path="/post/edit/:id" element={<EditPostPage />} />

      </Routes>

    </div>

  </BrowserRouter>
);

export default App;
