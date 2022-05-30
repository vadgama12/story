# `Fab`

This `<Fab />` is the extended version of the [Mui Fab](https://mui.com/api/fab/)

## Props

| Prop       | Type                                                | Default Value | Description                                                                                                             |
| :--------- | :-------------------------------------------------- | :------------ | :---------------------------------------------------------------------------------------------------------------------- |
| fabView    | 'normal' \| 'large' \| 'extended'                   | 'normal'      |
| children   | Node                                                |               | For "normal" or "large" fabView, only pass the icon as a children, and for "extended" fabView pass text along with icon |
| background | 'surface' \| 'primary' \| 'secondary' \| 'tertiary' | 'primary'     | Sets the color of the FAB.                                                                                              |

### Inheritance

While not explicitly documented above, the props of the [Mui Fab](https://mui.com/api/fab/) component are also available on this Fab.

## Usage

```

<Fab>
  <NavigationIcon>
</Fab>

```
