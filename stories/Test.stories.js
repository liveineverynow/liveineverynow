import React from 'react';

import { Test } from './Test';

export default {
  title: 'Example/Test',
  component: Test,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Test {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Test',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Test',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Test',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Test',
};
