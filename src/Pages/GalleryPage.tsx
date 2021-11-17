import React from 'react';
import Button from '../components/Button/Button';
import Content from '../components/Content/Content';

const GalleryPage = ():JSX.Element => (
  <Content direction="column" align="center">
    <h1 className="h1">Button gallery</h1>
    <Button type="button" purpose="primary">Primary</Button>
    <Button type="button" purpose="secondary">Secondary</Button>
    <Button type="button" purpose="delete">Delete</Button>
  </Content>
);

export default GalleryPage;
