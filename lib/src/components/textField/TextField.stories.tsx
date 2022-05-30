import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './TextField';
import { LeadingIcon } from '../icons';

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    children: { control: 'false' },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

// [START] without icon
export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: 'Label',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Label',
  InputProps: {
    startAdornment: (
      <InputAdornment position='start'>
        <LeadingIcon />
      </InputAdornment>
    ),
  },
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  value: 'Input text',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  focused: true,
  value: 'Input text',
};

// [START] show all variant

const Table = styled.table`
  td {
    padding: 0.5rem;
    padding-right: 3rem;
    text-align: left;
  }

  tr:first-child > td {
    text-align: center;
  }
`;

const RenderAllVariant: ComponentStory<typeof TextField> = () => (
  <Table>
    <tbody>
      <tr>
        <td></td>
        <td>Without Icon</td>
        <td>With leading Icon</td>
      </tr>
      <tr>
        <td>Not Focused Has Label</td>
        <td>
          <TextField label={'Label'} />
        </td>
        <td>
          <TextField
            label={'Label'}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Focused No Label No Fill</td>
        <td>
          <TextField focused={true} placeholder={'Placeholder'} />
        </td>
        <td>
          <TextField
            focused={true}
            placeholder={'Placeholder'}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Focused Has Label Filled</td>
        <td>
          <TextField label='Label' focused={true} value='Input text' />
        </td>
        <td>
          <TextField
            label='Label'
            focused={true}
            value='Input text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Not Focused Has Label Filled</td>
        <td>
          <TextField label='Label' value='Input text' />
        </td>
        <td>
          <TextField
            label='Label'
            value='Input text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Focused No Label Filled</td>
        <td>
          <TextField focused={true} value='Input text' />
        </td>
        <td>
          <TextField
            focused={true}
            value='Input text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>No Focused No Label Filled</td>
        <td>
          <TextField value='Input text' />
        </td>
        <td>
          <TextField
            value='Input text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Disabled No Label Filled</td>
        <td>
          <TextField disabled value='Input text' />
        </td>
        <td>
          <TextField
            disabled
            value='Input text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Disabled Has Label Filled</td>
        <td>
          <TextField disabled label='Label' value='Input text' />
        </td>
        <td>
          <TextField
            disabled
            label='Label'
            value='Input text'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Error focused Has Label Filled</td>
        <td>
          <TextField
            error
            focused
            label='Label'
            value='Input text'
            helperText='Error Message'
          />
        </td>
        <td>
          <TextField
            error
            focused
            label='Label'
            value='Input text'
            helperText='Error Message'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
        </td>
      </tr>
      <tr>
        <td>Error Focused No Label Filled</td>
        <td>
          <TextField
            error
            focused
            value='Input text'
            helperText='Error Message'
          />
        </td>
        <td>
          <TextField
            error
            focused
            value='Input text'
            helperText='Error Message'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LeadingIcon />
                </InputAdornment>
              ),
            }}
          />
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

// [END] show all variant
