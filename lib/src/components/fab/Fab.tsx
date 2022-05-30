import React from 'react';
import { FabProps as MuiFabProps } from '@mui/material/Fab';
import { StyledFab } from './Fab.styles';

export interface FabProps extends MuiFabProps {
  fabView?: 'normal' | 'large' | 'extended';
  background?: 'surface' | 'primary' | 'secondary' | 'tertiary';
}

/**
 * Floating action buttons (FAB). The FAB represents the most important action on a screen. It puts key actions within reach.
 */
export const Fab: React.FC<FabProps> = (props) => {
  return (
    <StyledFab
      {...props}
      color='default'
      variant={props.fabView === 'extended' ? 'extended' : 'circular'}
      fabView={props.fabView ? props.fabView : 'normal'}
    />
  );
};
