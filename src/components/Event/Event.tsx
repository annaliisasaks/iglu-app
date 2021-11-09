import React from 'react';
import { SideBarData } from '../../data/sidebar/sidebarData';
import Image from '../Image';
import Tag from '../Tag';
import ListItem from '../List/ListItem';
import List from '../List/List';
import './event.scss';

const Event = (props: SideBarData): JSX.Element => {
  const {
    eventDate, avatar, name, location, date, isTomorrow, isGoing,
  } = props;
  const info = [location?.site, location?.city, date].filter(Boolean);

  return (

    <>
      {avatar
        ? <Image className="event__image" avatar={avatar} name={name} />
        : <Tag className={`event__date ${isGoing ? 'event__date--going' : 'event__date--regular'} `}>{eventDate}</Tag>}
      <div className="event__info">
        <h4 className="event__name">{name}</h4>
        <List className="event__details" direction="horizontal" bullets>
          {info.map((listItem) => <ListItem>{listItem}</ListItem>)}
          {isGoing && <ListItem className="text-success">Going</ListItem>}
          {isTomorrow && <ListItem className="text-danger">Tomorrow</ListItem>}
        </List>
      </div>
    </>
  );
};

export default Event;
