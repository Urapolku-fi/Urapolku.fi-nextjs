import { Checkbox, useCheckbox } from '@/components/core';

export default {
  title: 'core/Checkbox',
  component: Checkbox,

  argTypes: {},
};

const Template = (args: any) => {
  const checkbox = useCheckbox();

  return <Checkbox {...checkbox} {...args} />;
};

export const Primary: any = Template.bind({});
Primary.args = {
  text: 'Checkbox',
};
