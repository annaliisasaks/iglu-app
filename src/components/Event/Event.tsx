import React from 'react';
import { SideBarData } from '../../data/sidebar/sidebarData';
import Image from '../Image/Image';
import Tag from '../Tag/Tag';
import ListItem from '../List/ListItem';
import List from '../List/List';
import './event.scss';

const Event = (props: SideBarData): JSX.Element => {
  const {
    eventDate, avatar, name, location, date, isTomorrow, isGoing,
  } = props;
  const info = [location?.site, location?.city, date].filter(Boolean);

  return (
    <div className="event">
      {avatar
        ? <Image className="event__image" src={avatar} alt={name} shape="round" />
        : <Tag className="event__date" purpose={isGoing ? 'going' : undefined}>{eventDate}</Tag>}
      <div className="event__info">
        <h4 className="event__name">{name}</h4>
        <List className="event__details" direction="horizontal" type="bullets">
          {info.map((listItem) => <ListItem>{listItem}</ListItem>)}
          {isGoing && <ListItem className="text-success">Going</ListItem>}
          {isTomorrow && <ListItem className="text-danger">Tomorrow</ListItem>}
        </List>
      </div>
    </div>
  );
};

export default Event;
