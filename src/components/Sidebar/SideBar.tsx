import React from 'react';
import BirthdayList from './components/birthdayList/BirthdayList';
import CommentList from './components/commentList/CommentList';
import EventList from './components/eventList/EventList';
import NewcomersList from './components/newcomersList/NewcomersList';
import SideBarItem from './components/SideBarItem';
import './sidebar.css';

const SideBar: React.FC = () => (
  <>
    <div className="sidebar">
      <SideBarItem heading="Events" child={<EventList />} />
      <SideBarItem heading="Birthdays" child={<BirthdayList />} />
      <SideBarItem heading="Newcomers" child={<NewcomersList />} />
      <SideBarItem heading="Latest comments" child={<CommentList />} />
    </div>
  </>
);
export default SideBar;
