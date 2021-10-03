import StevenImg from './52 1.png';
import EvaImg from './87 1.png';
import SarahImg from './32 1.png';

export type EventLocation = {
    city: string;
    site: string;
}

export type Event = {
    id?: number;
    date: string;
    name: string;
    location: EventLocation;
    isGoing: boolean;
    isTomorrow: boolean;
}

export const eventData: Event[] = [
  {
    id: 1,
    date: '11 Dets',
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
    date: '20 Dets',
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
    date: '9 Sept',
    name: 'Refresh 2021',
    location: {
      city: 'Tartu',
      site: 'SPARK',
    },
    isGoing: false,
    isTomorrow: false,

  },
];
export type Bd = {
    id?: number;
    date: string;
    name: string;
    image: string;
    isGoing: boolean;
    isTomorrow: boolean;
}

export const bdData: Bd[] = [
  {
    id: 1,
    date: 'Nov 12',
    name: 'Steven Heidel',
    image: StevenImg,
    isGoing: false,
    isTomorrow: true,

  },
  {
    id: 2,
    date: 'Nov 18',
    name: 'Eva Salomon',
    image: EvaImg,
    isGoing: true,
    isTomorrow: false,

  },
  {
    id: 3,
    date: 'Nov 29',
    name: 'Sarah Goldstein',
    image: SarahImg,
    isGoing: false,
    isTomorrow: false,

  },
];
export type Newcomers = {
    id?: number;
    date: string;
    name: string;
    image: string;
}

export const newcomersData: Newcomers[] = [
  {
    id: 1,
    date: 'Nov 11',
    name: 'Steven Heidel',
    image: StevenImg,
  },
  {
    id: 2,
    date: 'Nov 10',
    name: 'Eva Salomon',
    image: EvaImg,
  },
  {
    id: 3,
    date: 'Sept 1',
    name: 'Sarah Goldstein',
    image: SarahImg,
  },
];
