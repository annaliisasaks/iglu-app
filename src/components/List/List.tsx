import React from 'react';
import './list.scss';

interface Props {
  children: React.ReactNode
  className?: string;
  direction?:'horizontal';
  bullets?: boolean;
  hashtags?:boolean;
}

const List: React.FC<Props> = (props: Props) => {
  const {
    children, className, direction, bullets, hashtags,
  } = props;

  const BEM = (): string => {
    const classArray:string[] = [];

    if (direction) {
      classArray?.push(`list--${direction}`);
      console.log(classArray);
    }
    if (bullets) {
      classArray?.push('list--bullets');
    }
    if (hashtags) {
      classArray?.push('list--hashtags');
    }
    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };
  return (
    <ul className={BEM()} list-direction={direction || 'vertical'} list-bullets={bullets} list-hashtags={hashtags}>
      {children}
    </ul>
  );
};
export default List;
