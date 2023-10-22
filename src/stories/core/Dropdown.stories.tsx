import { Dropdown, useDropdown } from '@/components/core';

export default {
  title: 'core/Dropdown',
  component: Dropdown,

  argTypes: {},
};

const Template = (args:any) => {
  const dropdownHook = useDropdown();

  return <Dropdown {...args} {...dropdownHook} />;
};

export const Primary:any = Template.bind({});
Primary.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  title: 'Dropdown',
  closeAutomatically: true,
};
