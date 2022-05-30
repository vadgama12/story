import React, { ReactNode } from 'react';
import { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import {
  Description,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconWrapper,
  StyledDialog,
} from './Dialog.styles';
import Box from '@mui/material/Box';
import { useTheme } from '../../appTheme';
import { Button, ButtonProps } from '../button/Button';

export interface DialogProps {
  open: boolean;
  onClose: MuiDialogProps['onClose'];
  heroIcon?: ReactNode;
  title: string;
  description: string;
  children?: ReactNode;
  muiDialogProps?: MuiDialogProps;
  buttons: ButtonProps[];
  lessWidth?: boolean;
}

/**
 * Dialogs provide important prompts in a user flow. They can require an action, communicate information, or help users accomplish a task.
 */
export const Dialog: React.FC<DialogProps> = (props) => {
  const {
    open,
    onClose,
    muiDialogProps,
    heroIcon,
    title,
    description,
    children,
    buttons,
    lessWidth,
  } = props;
  const theme = useTheme();

  return (
    <StyledDialog
      lessWidth={lessWidth}
      onClose={onClose}
      open={open}
      {...muiDialogProps}
    >
      {heroIcon && <IconWrapper>{heroIcon}</IconWrapper>}

      <DialogTitle sx={{ textAlign: !!heroIcon ? 'center' : 'left' }}>
        {title}
      </DialogTitle>

      <DialogContent>
        {description && <Description>{description}</Description>}
        {children && <Box mt={theme.spacing(3)} />}
        {children}
      </DialogContent>

      {buttons && (
        <DialogActions>
          {buttons.map((buttonProps, index) => (
            <Button key={index} {...buttonProps} />
          ))}
        </DialogActions>
      )}
    </StyledDialog>
  );
};
