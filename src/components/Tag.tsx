import React from 'react';

interface Props {
  children: React.ReactNode,
  className?:string,
}

const Tag: React.FC<Props> = (props: Props) => {
  const { children, className } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default Tag;
