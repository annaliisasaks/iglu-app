import React from 'react';
import Posts from '../Posts/Posts';
import SideBar from '../Sidebar/SideBar';
import './content.css';

const Content: React.FC = () => (
  <div className="content">
    <Posts />
    <SideBar />
  </div>
);

export default Content;
