import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button>Hello Button</Button>;
