import React from 'react';
import { newcomersData, eventData, bdData } from '../../data/sidebar/sidebarData';
import { postsData } from '../../data/post/postData';
import './sideBar2.scss';
import SideBarSection from './SideBarSection';
import SideBarPost from './sideBarComments/SideBarPost';
import List from '../List/List';
import ListItem from '../List/ListItem';
import Event from '../Event/Event';

const SideBar2: React.FC = () => (
  <aside className="sidebar">
    <SideBarSection heading="Events">
      <List className="event">
        {eventData.map((event) => <ListItem className="event__item"><Event {...event} /></ListItem>)}
      </List>
    </SideBarSection>
    <SideBarSection heading="Birthdays">
      <List className="event">
        {bdData.map((birthday) => <ListItem className="event__item"><Event {...birthday} /></ListItem>)}
      </List>
    </SideBarSection>
    <SideBarSection heading="Newcomers">
      <List className="event">
        {newcomersData.map((newcomer) => <ListItem className="event__item"><Event {...newcomer} /></ListItem>)}
      </List>
    </SideBarSection>
    <SideBarSection heading="Latest comments">
      <List className="post-data">
        {postsData.map((post) => <ListItem className="post-data__item"><SideBarPost header={post.header} comments={post.comments} /></ListItem>)}
      </List>
    </SideBarSection>
  </aside>
);
export default SideBar2;
