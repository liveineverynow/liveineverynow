import React from 'react';

import { Roy } from './Roy';

export default {
  title: 'Roy',
  component: Roy,
};

const Template = (args) => <Roy {...args} />;

export const Primary = Template.bind({});

Primary.args = {
};

Primary.storyName = "Roy"
