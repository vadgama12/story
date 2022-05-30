# `Dialog`

## Props

| Prop           | Type                                          | Default Value | Description                                                                |
| :------------- | :-------------------------------------------- | :------------ | :------------------------------------------------------------------------- |
| open           | boolean                                       |               | state                                                                      |
| onClose        | MuiDialogProps['onClose']                     |               | Callback function that is invoked on close.                                |
| heroIcon       | ReactNode                                     |               | The icon to show on the top center                                         |
| title          | string                                        |               | Title of the dialog.                                                       |
| description    | string                                        |               | Description text shown on the dialog.                                      |
| children       | ReactNode                                     |               | Any body content after title and description should be passed as children. |
| lessWidth      | boolean                                       |               | If true, the dialog take a lesser width                                    |
| muiDialogProps | [MuiDialogProps](https://mui.com/api/dialog/) |               | Material-UI dialog component props. https://mui.com/api/dialog/            |
| buttons        | [ButtonProps[]]('@agosh-ui/button/')          |               | Array of buttons for users to take action. `../button/README.md`           |

## Usage

```

<Dialog
  open={true}
  onClose={() => ''}
  title={'Dialog title'}
  description='Lorem ipsum dolor emit. Lorem ipsum dolor emit. Lorem ipsum dolor emit.'
  heroIcon={<MobileCheckedIcon />}
  buttons={[
    { buttonView: 'text', children: 'Action 2' },
    { buttonView: 'text', children: 'Action 1' },
  ]}
>
  Body content goes here
</Dialog>

```
