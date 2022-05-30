import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { Card } from './Card';
import { MOCK_PROPS } from './MOCK_PROPS';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    children: { control: 'false' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const outlined = Template.bind({});
outlined.args = {
  ...MOCK_PROPS,
  cardView: 'outlined',
};

export const raised = Template.bind({});
raised.args = {
  ...MOCK_PROPS,
  cardView: 'raised',
};

export const muted = Template.bind({});
muted.args = {
  ...MOCK_PROPS,
  cardView: 'muted',
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

const RenderAllVariant: ComponentStory<typeof Card> = () => (
  <Table>
    <tbody>
      <tr>
        <td></td>
        <td>Outlined</td>
        <td>Raised</td>
        <td>Muted</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Card {...MOCK_PROPS} cardView='outlined' />
        </td>
        <td>
          <Card {...MOCK_PROPS} cardView='raised' />
        </td>
        <td>
          <Card {...MOCK_PROPS} cardView='muted' />
        </td>
      </tr>
      <tr>
        <td>Header only</td>
        <td>
          <Card {...MOCK_PROPS} cardView='outlined' headerOnly />
        </td>
        <td>
          <Card {...MOCK_PROPS} cardView='raised' headerOnly />
        </td>
        <td>
          <Card {...MOCK_PROPS} cardView='muted' headerOnly />
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
