import React from 'react';
import './image.scss';

interface Props {
  src: string,
  alt: string,
  className?: string,
  shape?:'round',
}

const Image = (props: Props):JSX.Element => {
  const {
    src, alt, className, shape,
  } = props;
  const BEM = (): string => {
    const classArray:string[] = ['image'];

    if (shape) {
      classArray.push(`image--${shape}`);
    }
    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  };
  return (
    <img className={BEM()} src={src} alt={alt} />
  );
};

export default Image;
