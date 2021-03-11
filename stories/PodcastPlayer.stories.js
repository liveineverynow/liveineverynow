import React from 'react';

import { PodcastPlayer } from './PodcastPlayer';

export default {
  title: 'PodcastPlayer',
  component: PodcastPlayer,
};

const Template = (args) => <PodcastPlayer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    episode_num: '001',
    title: 'Test Episode',
    description: 'This is the first episode.',
    url: 'https://yourmom.com',
    pub_date: '2021-02-03T07:00:00',
};