import React from 'react';

import { NavDropdown } from './NavDropdown';

export default {
  title: 'NavDropdown',
  component: NavDropdown,
};

const Template = (args) => <NavDropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    darkMode: false,
    label: 'Storybook Label',
};

Primary.storyName = "Primary"
