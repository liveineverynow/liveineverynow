import React from 'react';

import { ListItem } from './ListItem';

export default {
  title: 'ListItem',
  component: ListItem,
};

const Template = ({t1, t2}) => (
  <ul>
  <ListItem title={ t1 }>
  <a href="#">Spotify</a>
  <a href="#">Apple Music</a>
  </ListItem>
  <ListItem title={ t2 }>
  <a href="#">Spotify</a>
  <a href="#">Apple Music</a>
  </ListItem>
  </ul>);

export const Primary = Template.bind({});

Primary.args = {
};

Primary.storyName = "Primary"
