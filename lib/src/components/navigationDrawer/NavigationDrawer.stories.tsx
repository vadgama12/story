import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationDrawer } from './NavigationDrawer';
import { NAVIGATION_DRAWER_PROPS } from './MOCK_DATA';

export default {
  title: 'NavigationDrawer',
  component: NavigationDrawer,
  argTypes: {
    children: { control: 'false' },
  },
} as ComponentMeta<typeof NavigationDrawer>;

const Template: ComponentStory<typeof NavigationDrawer> = (args) => {
  const [open, setOpen] = React.useState(true);
  const [selectedLabel, setSelectedLabel] = React.useState('Favorites');
  const [selectedSubLabel, setSelectedSubLabel] = React.useState('Sublabel 2');

  const handleToggleDrawer = () => setOpen((prev) => !prev);

  return (
    <NavigationDrawer
      {...args}
      open={open}
      handleToggleDrawer={handleToggleDrawer}
      selectedLabel={selectedLabel}
      selectedSubLabel={selectedSubLabel}
      handleItemClick={(selectedLabel: string, selectedSubLabel?: string) => {
        setSelectedLabel(selectedLabel);

        if (selectedSubLabel) {
          setSelectedSubLabel(selectedSubLabel);
        }
      }}
    >
      <div style={{ padding: '1rem' }}>Children content</div>
    </NavigationDrawer>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...NAVIGATION_DRAWER_PROPS,
};
