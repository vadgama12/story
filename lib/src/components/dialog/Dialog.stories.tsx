import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from './Dialog';
import { DIALOG_PROPS } from './MOCK_DATA';
import { Button } from '../button';

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {
    children: { control: 'false' },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog {...args} onClose={handleClose} open={open} />
    </>
  );
};

export const DialogWithHeroIcon = Template.bind({});
DialogWithHeroIcon.args = {
  ...DIALOG_PROPS,
  children: undefined,
};

export const BasicDialogTitle = Template.bind({});
BasicDialogTitle.args = {
  ...DIALOG_PROPS,
  heroIcon: undefined,
  children: undefined,
};

export const WithContent = Template.bind({});
WithContent.args = {
  ...DIALOG_PROPS,
  heroIcon: undefined,
};
