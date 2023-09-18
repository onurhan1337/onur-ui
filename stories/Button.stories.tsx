import React from 'react';
import { Meta } from '@storybook/react';
import { Button, ButtonProps } from '../src/components/Button/Button';
import { Flame } from 'lucide-react';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const DefaultButton = (args: ButtonProps) => (
  <Button {...args}>{args.title}</Button>
);

DefaultButton.args = {
  title: 'Think Different',
  variant: 'default',
  size: 'default',
  rounded: 'default',
  asChild: false,
};

export const ButtonAsChild = (args: ButtonProps) => (
  <Button {...args}>
    <Button>{args.title}</Button>
  </Button>
);

ButtonAsChild.args = {
  title: 'You are on fire!',
  variant: 'default',
  size: 'default',
  rounded: 'default',
  asChild: true,
};

export const ButtonWithIcon = (args: ButtonProps) => (
  <Button {...args}>
    <Flame />
    {args.title}
  </Button>
);

ButtonWithIcon.args = {
  title: 'You are on fire!',
  variant: 'default',
  size: 'default',
  rounded: 'default',
  asChild: false,
};

export const ButtonWithIconOnly = (args: ButtonProps) => (
  <Button {...args}>
    <Flame />
  </Button>
);

ButtonWithIconOnly.args = {
  title: 'You are on fire!',
  variant: 'default',
  size: 'icons',
  rounded: 'default',
  asChild: false,
};
