import React from 'react';

import { Dropdown } from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownExample = Template.bind({});
DropdownExample.args = {
  options: ['Profile', 'Logout']
};
