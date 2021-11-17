import React from 'react';
import './separator.scss';

interface Props {
  type: 'div' | 'hr',
}

const Separator = (props: Props):JSX.Element => {
  const { type } = props;
  const BEM = (): string => {
    const classArray:string[] = ['separator'];

    if (type) {
      classArray.push(`separator__${type}`);
    }
    return classArray.join(' ');
  };
  return (
    <>
      {type === 'div' ? <div className={BEM()} /> : <hr className={BEM()} />}
    </>

  );
};
export default Separator;
