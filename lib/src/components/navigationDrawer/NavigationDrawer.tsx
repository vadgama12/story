import React, { ReactNode } from 'react';
import {
  StyledNavigationDrawer,
  ListItemTextCollapsed,
  DrawerHeader,
} from './NavigationDrawer.styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AgoshLogoIcon } from '../icons';
import { NestedDropdown } from './NestedDropdown';
import { Drawer } from './utils';

export interface NavigationDrawerProps {
  open: boolean;
  handleToggleDrawer: () => void;
  handleItemClick: (selectedLabel: string, selectedSubLabel?: string) => void;
  selectedLabel: string;
  selectedSubLabel?: string;
  actionProps: {
    label: string;
    icon: ReactNode;
    subLabels?: string[];
  }[][];
  children?: ReactNode;
}

/**
 * Navigation drawers provide ergonomic access to destinations in an app.
 */
export const NavigationDrawer: React.FC<NavigationDrawerProps> = (props) => {
  const {
    actionProps,
    handleItemClick,
    selectedLabel,
    open,
    handleToggleDrawer,
    selectedSubLabel,
    children,
  } = props;

  return (
    <StyledNavigationDrawer {...props}>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <AgoshLogoIcon />
        </DrawerHeader>

        {actionProps.map((list, index) => (
          <List key={index}>
            {list.map(({ label, icon, subLabels }, index) => (
              <Box key={index} sx={{ textAlign: 'center', mb: '0.5rem' }}>
                <ListItem
                  disableRipple={!!subLabels && open}
                  sx={{ cursor: !!subLabels && open ? 'auto' : 'pointer' }}
                  button
                  selected={selectedLabel === label}
                  onClick={() => handleItemClick(label)}
                  onSelect={(arg) => {
                    console.log({ arg });
                  }}
                  key={label}
                >
                  {!open && <ListItemIcon>{icon}</ListItemIcon>}
                  {open && (
                    <ListItemText
                      primary={
                        <NestedDropdown
                          icon={icon}
                          label={label}
                          selectedLabel={selectedLabel}
                          subLabels={subLabels}
                          selectedSubLabel={selectedSubLabel}
                          handleItemClick={handleItemClick}
                        />
                      }
                    />
                  )}
                </ListItem>
                {!open && (
                  <ListItemTextCollapsed onClick={() => handleItemClick(label)}>
                    {label}
                  </ListItemTextCollapsed>
                )}
              </Box>
            ))}
          </List>
        ))}

        {children && <Box sx={{ marginTop: 'auto' }}>{children}</Box>}
      </Drawer>
    </StyledNavigationDrawer>
  );
};
