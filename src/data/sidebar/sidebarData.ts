import StevenImg from './52 1.png';
import EvaImg from './87 1.png';
import SarahImg from './32 1.png';

export type EventLocation = {
    city: string;
    site: string;
}

export type SideBarData = {
    id?: number;
    eventDate?: string;
    date?: string;
    name: string;
    location?: EventLocation;
    isGoing?: boolean;
    isTomorrow?: boolean;
    avatar?: string;
}

export const eventData: SideBarData[] = [
  {
    id: 1,
    eventDate: '11 Dets',
    name: 'UX Tartu',
    location: {
      city: 'Tartu',
      site: 'SPARK',
    },
    isGoing: false,
    isTomorrow: true,

  },
  {
    id: 2,
    eventDate: '20 Dets',
    name: 'Christmas Party',
    location: {
      city: 'Tartu',
      site: 'SPARK',
    },
    isGoing: true,
    isTomorrow: false,

  },
  {
    id: 3,
    eventDate: '9 Sept',
    name: 'Refresh 2021',
    location: {
      city: 'Tartu',
      site: 'SPARK',
    },
    isGoing: false,
    isTomorrow: false,

  },
];
export const bdData: SideBarData[] = [
  {
    id: 1,
    date: 'Nov 12',
    name: 'Steven Heidel',
    avatar: StevenImg,
    isGoing: false,
    isTomorrow: true,

  },
  {
    id: 2,
    date: 'Nov 18',
    name: 'Eva Salomon',
    avatar: EvaImg,
    isGoing: true,
    isTomorrow: false,

  },
  {
    id: 3,
    date: 'Nov 29',
    name: 'Sarah Goldstein',
    avatar: SarahImg,
    isGoing: false,
    isTomorrow: false,

  },
];
export const newcomersData: SideBarData[] = [
  {
    id: 1,
    date: 'Nov 11',
    name: 'Steven Heidel',
    avatar: StevenImg,
  },
  {
    id: 2,
    date: 'Nov 10',
    name: 'Eva Salomon',
    avatar: EvaImg,
  },
  {
    id: 3,
    date: 'Sept 1',
    name: 'Sarah Goldstein',
    avatar: SarahImg,
  },
];
