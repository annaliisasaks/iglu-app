import React from 'react';
import './textfield.scss';

interface Props {
  className?:string,
  type: 'text' | 'number',
  name:string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  defaultvalue?: string,
  placeholder?:string,
  required?: boolean,
}

const Textfield = (props: Props):JSX.Element => {
  const {
    className, type, name, onChange, defaultvalue, placeholder, required,
  } = props;
  const BEM = (): string => {
    const classArray:string[] = ['textfield'];

    if (className) {
      classArray.push(className);
    }
    return classArray.join(' ');
  };
  return (
    <input className={BEM()} type={type} name={name} onChange={onChange} defaultValue={defaultvalue || ''} placeholder={placeholder} required={required} />
  );
};
export default Textfield;
