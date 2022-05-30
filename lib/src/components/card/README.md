# `Card`

## Props

| Prop           | Type                                   | Default Value | Description                                                  |
| :------------- | :------------------------------------- | :------------ | :----------------------------------------------------------- |
| cardView       | 'outlined' \| 'raised' \| 'muted'      | 'outlined'    | Card may have border, or boxShadow, or soft background color |
| headerOnly     | boolean                                |               | To show only the header on the card                          |
| headerAvatar   | ReactNode                              |               | Top Left avatar                                              |
| headerEndIcon  | ReactNode                              |               | Top right card header                                        |
| headerTitle    | string                                 |               | Title of the card header                                     |
| headerSubtitle | string                                 |               | Subtitle of the card header                                  |
| image          | image: { src, altText, title, srcSet } |               | Image to be shown on the card                                |
| title          | string                                 |               | Title of the card body                                       |
| subtitle       | string                                 |               | Subtitle of the card body                                    |
| description    | string                                 |               | Description of the card body                                 |
| buttons        | ButtonProps[]                          |               | Array of buttons for users to take action.                   |
| muiCardProps   | MuiCardProps                           |               | Props of the [Mui Card](https://mui.com/api/card/) component |

## Usage

```
import { Card } from 'components/card;

<Card
  cardView='muted'
  headerOnly={false}
  headerAvatar='A'
  headerTitle='Header'
  headerSubtitle='Subhead'
  title='Title'
  subtitle='Subhead'
  description=
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
  buttons= {[
    { buttonView: 'outlined', children: 'Action' },
    { children: 'Action' }
  ]}
>

```
