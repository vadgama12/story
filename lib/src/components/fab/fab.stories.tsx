import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditIcon from '@mui/icons-material/EditOutlined';
import styled from 'styled-components';

import { Fab } from './Fab';

export default {
  title: 'Fab',
  component: Fab,
  argTypes: {
    children: { control: 'false' },
  },
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <EditIcon />,
};

export const Large = Template.bind({});
Large.args = {
  fabView: 'large',
  children: <EditIcon />,
};

export const Extended = Template.bind({});
Extended.args = {
  fabView: 'extended',
  children: (
    <>
      <EditIcon /> Enabled
    </>
  ),
};

const Table = styled.table`
  td {
    padding: 1rem;
    padding-right: 3rem;
    text-align: center;
  }

  td:first-child {
    text-align: left;
  }
`;

const RenderAllVariant: ComponentStory<typeof Fab> = () => (
  <Table>
    <tbody>
      <tr>
        <td>Showcase</td>
        <td>Large</td>
        <td>Extended</td>
        <td>Normal</td>
      </tr>
      <tr>
        <td>Surface</td>
        <td>
          <Fab fabView='large' background='surface'>
            <EditIcon />
          </Fab>
        </td>
        <td>
          <Fab fabView='extended' background='surface'>
            <EditIcon /> Extended
          </Fab>
        </td>
        <td>
          <Fab background='surface'>
            <EditIcon />
          </Fab>
        </td>
      </tr>
      <tr>
        <td>Primary</td>
        <td>
          <Fab fabView='large' background='primary'>
            <EditIcon />
          </Fab>
        </td>
        <td>
          <Fab fabView='extended' background='primary'>
            <EditIcon /> Extended
          </Fab>
        </td>
        <td>
          <Fab background='primary'>
            <EditIcon />
          </Fab>
        </td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td>
          <Fab fabView='large' background='secondary'>
            <EditIcon />
          </Fab>
        </td>
        <td>
          <Fab fabView='extended' background='secondary'>
            <EditIcon /> Extended
          </Fab>
        </td>
        <td>
          <Fab background='secondary'>
            <EditIcon />
          </Fab>
        </td>
      </tr>
      <tr>
        <td>Tertiary</td>
        <td>
          <Fab fabView='large' background='tertiary'>
            <EditIcon />
          </Fab>
        </td>
        <td>
          <Fab fabView='extended' background='tertiary'>
            <EditIcon /> Extended
          </Fab>
        </td>
        <td>
          <Fab background='tertiary'>
            <EditIcon />
          </Fab>
        </td>
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <Fab fabView='large' background='tertiary' disabled>
            <EditIcon />
          </Fab>
        </td>
        <td>
          <Fab fabView='extended' background='tertiary' disabled>
            <EditIcon /> Extended
          </Fab>
        </td>
        <td>
          <Fab background='tertiary' disabled>
            <EditIcon />
          </Fab>
        </td>
      </tr>
    </tbody>
  </Table>
);

export const AllVariants = RenderAllVariant.bind({});
AllVariants.args = {};
AllVariants.parameters = {
  options: {
    showPanel: false,
  },
};
