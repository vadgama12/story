import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { PlusIcon } from '../icons';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    icon: { control: 'false' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click Me!</Button>
);

export const Default = Template.bind({});
Default.args = {
  buttonView: 'filled',
  disabled: false,
};
Default.parameters = {
  options: {
    showPanel: true,
  },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  buttonView: 'filled',
  disabled: false,
  icon: <PlusIcon />,
};
WithIcon.parameters = {
  options: {
    showPanel: true,
  },
};

const ButtonShowcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;

  & > *:nth-child(odd) {
    margin-top: 1.5rem;
  }
`;

const RenderAllVariant: ComponentStory<typeof Button> = () => (
  <ButtonShowcase>
    <Button buttonView='filled'>Click Me!</Button>
    <Button buttonView='filled' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='outlined'>Click Me!</Button>
    <Button buttonView='outlined' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='text'>Click Me!</Button>
    <Button buttonView='text' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='elevated'>Click Me!</Button>
    <Button buttonView='elevated' icon={<PlusIcon />}>
      Click Me!
    </Button>

    <Button buttonView='tonal'>Click Me!</Button>
    <Button buttonView='tonal' icon={<PlusIcon />}>
      Click Me!
    </Button>
  </ButtonShowcase>
);

export const AllVariants = RenderAllVariant.bind({});
AllVariants.args = {
  buttonView: 'filled',
  disabled: false,
  icon: <PlusIcon />,
};
AllVariants.parameters = {
  options: {
    showPanel: false,
  },
};
