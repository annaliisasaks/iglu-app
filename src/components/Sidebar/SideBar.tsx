import React, { useContext } from 'react';
import { newcomersData, eventData, bdData } from '../../data/sidebar/sidebarData';
import './sideBar.scss';
import SideBarSection from './SideBarSection';
import SideBarPost from './sideBarPost/SideBarPost';
import List from '../List/List';
import ListItem from '../List/ListItem';
import Event from '../Event/Event';
import PostContext from '../../Context/PostContext';

const SideBar = ():JSX.Element => {
  const { posts } = useContext(PostContext);

  return (
    <aside className="sidebar">
      <SideBarSection heading="Events">
        <List className="section__list">
          {eventData.map((event, index) => <ListItem className="section__list-item" key={index}><Event {...event} /></ListItem>)}
        </List>
      </SideBarSection>
      <SideBarSection heading="Birthdays">
        <List className="section__list">
          {bdData.map((birthday, index) => <ListItem className="section__list-item" key={index}><Event {...birthday} /></ListItem>)}
        </List>
      </SideBarSection>
      <SideBarSection heading="Newcomers">
        <List className="section__list">
          {newcomersData.map((newcomer, index) => <ListItem className="section__list-item" key={index}><Event {...newcomer} /></ListItem>)}
        </List>
      </SideBarSection>
      <SideBarSection heading="Latest comments">
        <List className="section__list">
          {posts.map((post, index) => <ListItem className="section__list-item" key={index}><SideBarPost header={post.header} comments={post.comments} /></ListItem>)}
        </List>
      </SideBarSection>
    </aside>
  );
};
export default SideBar;
