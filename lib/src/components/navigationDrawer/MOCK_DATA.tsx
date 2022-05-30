import * as React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavigationDrawerProps } from './NavigationDrawer';

export const NAVIGATION_DRAWER_PROPS: NavigationDrawerProps = {
  open: true,
  handleToggleDrawer: () => {},
  handleItemClick: () => {},
  selectedLabel: 'Favorites',
  actionProps: [
    [
      {
        label: 'Favorites',
        icon: <FavoriteIcon />,
        subLabels: ['Sublabel 1', 'Sublabel 2', 'Sublabel 3', 'Sublabel 4'],
      },
      {
        label: 'Nearby',
        icon: <LocationOnIcon />,
        subLabels: ['Sublabel 5', 'Sublabel 6', 'Sublabel 7', 'Sublabel 4'],
      },
      {
        label: 'Recent',
        icon: <RestoreIcon />,
      },
      {
        label: 'Starred',
        icon: <FavoriteIcon />,
      },
      {
        label: 'Inbox',
        icon: <RestoreIcon />,
      },
      {
        label: 'Drafts',
        icon: <LocationOnIcon />,
      },
    ],
  ],
};
