import React from 'react';

import { TemplateComponent } from './TemplateComponent';

export default {
  title: 'TemplateComponent',
  component: TemplateComponent,
};

const Template = (args) => <TemplateComponent {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    darkMode: false,
    label: 'Storybook Label',
};

Primary.storyName = "Primary"
