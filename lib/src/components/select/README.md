# `Select`

## Props

| Prop                | Type                                                     | Default Value | Description                                                                  |
| :------------------ | :------------------------------------------------------- | :------------ | :--------------------------------------------------------------------------- |
| value               | string                                                   |               | Selected value                                                               |
| options             | `{ text: string; value: string }[]`                      |               | Options that are shown in the dropdown menu list                             |
| handleChange        | `(event: SelectChangeEvent<unknown>) => void;`           |               | Function that controls the value                                             |
| label               | string                                                   |               |                                                                              |
| disabled            | boolean                                                  |               |                                                                              |
| error               | boolean                                                  |               |                                                                              |
| helperText          | string                                                   |               | Helper text is shown below the select and in red color when error is true    |
| muiSelectProps      | [muiSelectProps](https://mui.com/api/select/)            |               | Props of the [Mui select](https://mui.com/components/text-fields/) component |
| muiInputLabelProps  | [muiInputLabelProps](https://mui.com/api/input-label/)   |               | Props of the [Mui input-label](https://mui.com/api/input-label/) component   |
| muiFormControlProps | [muiFormControlProps](https://mui.com/api/form-control/) |               | Props of the [Mui form-control](https://mui.com/api/form-control/) component |
| muiMenuItemProps    | [muiMenuItemProps](https://mui.com/api/menu-item/)       |               | Props of the [Mui menu-item](https://mui.com/api/menu-item/) component       |

## Usage

```
<Select
  value='10'
  label='Label'
  options={OPTIONS}
  handleChange={() => ''}
/>

```
