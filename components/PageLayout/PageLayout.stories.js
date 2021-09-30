import React from 'react';

import { PageLayout } from './PageLayout';

export default {
  title: 'PageLayout',
  component: PageLayout,
};

const Template = (args) => <PageLayout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    darkMode: false,
    label: 'Storybook Label',
};

Primary.storyName = "Primary"
