import React from 'react';

import ProseP from './ProseP';

export default {
  title: 'Prose Paragraph',
  component: ProseP,
};

const Template = (args) => <ProseP {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: '2021-02-03T07:00:00',
    red: true,
};
