import { MultiDropdown, useMultiDropdown } from '@/components/core';

export default {
  title: 'core/MultiDropdown',
  component: MultiDropdown,

  argTypes: {},
};

const Template = (args: any) => {
  const multiDropdownHook = useMultiDropdown(args.values);

  return <MultiDropdown {...args} {...multiDropdownHook} />;
};

export const Primary: any = Template.bind({});
Primary.args = {
  sets: [
    {
      title: 'Set 1',
      values: [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 1',
        'Option 2',
        'Option 3',
      ],
    },
    {
      title: 'Set 2',
      values: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      title: 'Set 3',
      values: ['Option 1', 'Option 2', 'Option 3'],
    },
  ],
  title: 'MultiDropdown',
};
