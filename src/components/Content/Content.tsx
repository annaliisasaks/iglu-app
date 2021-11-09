import React from 'react';
import Main from '../Posts/Main';
import SideBar2 from '../Sidebar2/SideBar2';
import './content.css';

const Content: React.FC = () => (
  <div className="content">
    <Main />
    <SideBar2 />
  </div>
);

export default Content;
