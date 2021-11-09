import React from 'react';

interface Props {
  avatar: string,
  name: string,
  className?: string,
}

const Image: React.FC<Props> = (props: Props) => {
  const { avatar, name, className } = props;

  return (
    <img className={className} src={avatar} alt={name} />
  );
};

export default Image;
