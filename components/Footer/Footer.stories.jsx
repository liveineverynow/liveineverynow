import React from 'react';
import { Footer } from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  }
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.storyName = "Footer"
