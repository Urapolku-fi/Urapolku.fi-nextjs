import { Button } from '@/components/core';

export default {
  title: 'core/Button',
  component: Button,

  argTypes: {
    variant: {
      options: ['normal', 'search', 'rounded'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'normal',
  glow: true,
  outline: false,
  dark: false,
  size: 'medium',
};

export const Secondary: any = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'normal',
  glow: false,
  outline: false,
  dark: false,
  size: 'medium',
};

export const Tertiary: any = Template.bind({});
Tertiary.args = {
  children: 'Tertiary Button',
  variant: 'normal',
  glow: false,
  outline: true,
  dark: false,
  size: 'medium',
};

export const PrimaryRounded: any = Template.bind({});
PrimaryRounded.args = {
  children: 'Primary Rounded Button',
  variant: 'rounded',
  glow: true,
  outline: false,
  dark: false,
  size: 'medium',
};

export const SecondaryRounded: any = Template.bind({});
SecondaryRounded.args = {
  children: 'Secondary Rounded Button',
  variant: 'rounded',
  glow: false,
  outline: false,
  dark: false,
  size: 'medium',
};

export const TertiaryRounded: any = Template.bind({});
TertiaryRounded.args = {
  children: 'Tertiary Rounded Button',
  variant: 'rounded',
  glow: false,
  outline: true,
  dark: false,
  size: 'medium',
};

export const PrimarySearch: any = Template.bind({});
PrimarySearch.args = {
  children: 'Primary Search Button',
  variant: 'search',
  glow: true,
  outline: false,
  dark: false,
  size: 'medium',
};

export const SecondarySearch: any = Template.bind({});
SecondarySearch.args = {
  children: 'Secondary Search Button',
  variant: 'search',
  glow: false,
  outline: false,
  dark: false,
  size: 'medium',
};

export const TertiarySearch: any = Template.bind({});
TertiarySearch.args = {
  children: 'Tertiary Search Button',
  variant: 'search',
  glow: false,
  outline: true,
  dark: false,
  size: 'medium',
};
