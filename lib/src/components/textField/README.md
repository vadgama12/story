# `TextField`

This `<TextField />` is the extended version of the [Mui TextField](https://mui.com/components/text-fields/)

## Props

| Prop  | Type   | Default Value | Description |
| :---- | :----- | :------------ | :---------- |
| label | string |               |             |
| value | string |               |             |

### Inheritance

While not explicitly documented above, the props of the [Mui TextField](https://mui.com/components/text-fields/) component are also available on this TextField.

## Usage

```

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

```
