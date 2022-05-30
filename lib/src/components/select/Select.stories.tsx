import Box from '@mui/material/Box';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';
import { LeadingIcon } from '../icons';
import { SelectChangeEvent } from '@mui/material/Select';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    children: { control: 'false' },
  },
} as ComponentMeta<typeof Select>;

const OPTIONS = [
  { value: '10', text: 'Ten' },
  { value: '20', text: 'Twenty' },
  { value: '30', text: 'Thirty' },
];

const Template: ComponentStory<typeof Select> = (args) => {
  const [age, setAge] = React.useState('10');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setAge(event?.target?.value as string);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Select
        {...args}
        value={args.value ?? age}
        handleChange={args.handleChange ?? handleChange}
        options={args.options ?? OPTIONS}
      />
    </Box>
  );
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  label: 'Label',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Label',
  muiSelectProps: {
    startAdornment: (
      <InputAdornment position='start'>
        <LeadingIcon />
      </InputAdornment>
    ),
  },
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

// [START] show all variant

const Table = styled.table`
  td {
    min-width: 300px;
    padding: 0.5rem;
    padding-right: 3rem;
    text-align: left;
  }

  tr:first-child > td {
    text-align: center;
  }
`;

const RenderAllVariant: ComponentStory<typeof Select> = () => (
  <Table>
    <tbody>
      <tr>
        <td></td>
        <td>Without Icon</td>
        <td>With leading Icon</td>
      </tr>
      <tr>
        <td>Has Label</td>
        <td>
          <Select
            value=''
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
          />
        </td>
        <td>
          <Select
            value=''
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
            muiSelectProps={{
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
        <td>Has Label Has Value</td>
        <td>
          <Select
            value='10'
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
          />
        </td>
        <td>
          <Select
            value='10'
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
            muiSelectProps={{
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
        <td>No Label Has value</td>
        <td>
          <Select value='10' options={OPTIONS} handleChange={() => ''} />
        </td>
        <td>
          <Select
            value='10'
            options={OPTIONS}
            handleChange={() => ''}
            muiSelectProps={{
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
        <td>Disabled No Label Has Value</td>
        <td>
          <Select
            disabled
            value='10'
            options={OPTIONS}
            handleChange={() => ''}
          />
        </td>
        <td>
          <Select
            disabled
            value='10'
            options={OPTIONS}
            handleChange={() => ''}
            muiSelectProps={{
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
        <td>Disabled Has Label Has Value</td>
        <td>
          <Select
            disabled
            value='10'
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
          />
        </td>
        <td>
          <Select
            disabled
            value='10'
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
            muiSelectProps={{
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
        <td>Error No Label Has Value</td>
        <td>
          <Select
            error
            value='10'
            options={OPTIONS}
            handleChange={() => ''}
            helperText='Error Message'
          />
        </td>
        <td>
          <Select
            error
            value='10'
            options={OPTIONS}
            handleChange={() => ''}
            helperText='Error Message'
            muiSelectProps={{
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
        <td>Error Has Label Has Value</td>
        <td>
          <Select
            error
            value='10'
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
            helperText='Error Message'
          />
        </td>
        <td>
          <Select
            error
            value='10'
            label='Label'
            options={OPTIONS}
            handleChange={() => ''}
            helperText='Error Message'
            muiSelectProps={{
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
