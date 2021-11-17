import coverImg from './coverImg.png';

export type PostComment = {
    date: string;
    author: string;
    content: string;
}

export type Post = {
    id: number;
    header: string;
    content: string;
    author: string;
    date: string;
    tags: string[];
    image: string;
    likes: number;
    comments: PostComment[];
    views: number;
}

export const postsData: Post[] = [
  {
    id: 1,
    header: 'Practical Functional Programming',
    content: 'The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “side effects”.',
    author: 'Steven Heidel',
    date: 'Apr 29, 2017',
    tags: ['events', 'programming'],
    image: coverImg,
    likes: 1,
    comments: [
      {
        date: 'Nov 2',
        author: 'Steven Heidel',
        content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
      },
    ],
    views: 3,
  },
  {
    id: 2,
    header: 'Practical Functional Programming2',
    content: 'The following is reformatted from a presentation I gave at LinkedIn last year. The presentation attempted to explain functional programming without using concepts like “side effects”.',
    author: 'Steven Heidel',
    date: 'Apr 29, 2017',
    tags: ['events', 'programming'],
    image: coverImg,
    likes: 5,
    comments: [
      {
        date: 'Nov 3',
        author: 'Steven Heidel',
        content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
      },
      {
        date: 'Nov 4',
        author: 'Steven Heidel',
        content: 'Instead it focuses on how thinking about composition can make you a better programmer.',
      },
    ],
    views: 3,
  },
];
