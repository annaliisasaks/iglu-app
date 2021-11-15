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
          {eventData.map((event) => <ListItem className="section__list-item"><Event {...event} /></ListItem>)}
        </List>
      </SideBarSection>
      <SideBarSection heading="Birthdays">
        <List className="section__list">
          {bdData.map((birthday) => <ListItem className="section__list-item"><Event {...birthday} /></ListItem>)}
        </List>
      </SideBarSection>
      <SideBarSection heading="Newcomers">
        <List className="section__list">
          {newcomersData.map((newcomer) => <ListItem className="section__list-item"><Event {...newcomer} /></ListItem>)}
        </List>
      </SideBarSection>
      <SideBarSection heading="Latest comments">
        <List className="section__list">
          {posts.map((post) => <ListItem className="section__list-item"><SideBarPost header={post.header} comments={post.comments} /></ListItem>)}
        </List>
      </SideBarSection>
    </aside>
  );
};
export default SideBar;
