# `NavigationDrawer`

This `<NavigationDrawer />` is the extended version of the [Mui NavigationDrawer](https://mui.com/api/navigationDrawer/)

## Props

| Prop               | Type                                                         | Default Value | Description                                          |
| :----------------- | :----------------------------------------------------------- | :------------ | :--------------------------------------------------- |
| open               | boolean                                                      |               | Open/Collapsed state                                 |
| handleToggleDrawer | () => void                                                   |               | Fires when user clicks on the hamburger icon         |
| handleItemClick    | (selectedLabel: string, selectedSubLabel?: string) => void   |               | Fires when you clicks on a list item                 |
| selectedLabel      | string                                                       |               | Active selected label                                |
| selectedSubLabel   | string                                                       |               | Active sub-label in the case of nested dropdown menu |
| actionProps        | {label: string; icon: ReactNode; subLabels?: string[]; }[][] |               | List of Navigation links and nested links            |
| children           | ReactNode                                                    |               | Children can be passed that are added in the bottom  |

## Usage

```

 <NavigationDrawer
  open={open}
  handleToggleDrawer={() => {}}
  selectedLabel="Label 1"
  selectedSubLabel="Sub label"
  handleItemClick={() => {}}
/>

```
