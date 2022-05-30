import styled, { css } from 'styled-components';
import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import { theme } from '../../appTheme';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogActions from '@mui/material/DialogActions';

interface StyledDialogProps extends MuiDialogProps {
  lessWidth?: boolean;
}

export const StyledDialog = styled(MuiDialog)<StyledDialogProps>`
  & .MuiDialog-paper {
    background: linear-gradient(
        0deg,
        ${theme.color('Surface31')},
        ${theme.color('Surface31')}
      ),
      ${theme.color('Surface30')};
    border-radius: ${theme.spacing(3.5)};
    padding: ${theme.spacing(3)};
    width: ${({ lessWidth }) =>
      css`
        ${theme.spacing(lessWidth ? 35 : 39)}
      `};
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: ${theme.spacing(2)};
  color: ${theme.color('Secondary')};
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    display: flex;
  }
`;

export const Description = styled.div`
  margin-top: ${theme.spacing(2)};
`;

export const DialogTitle = styled(MuiDialogTitle)`
  &.MuiDialogTitle-root {
    ${theme.common('M3HeadlineSmall')};
    color: ${theme.color('OnSurface')};
    padding: 0;
    margin: 0;
  }
`;

export const DialogContent = styled(MuiDialogContent)`
  &.MuiDialogContent-root {
    ${theme.common('M3BodyMedium')};
    color: ${theme.color('OnSurfaceVariant')};
    padding: 0;
  }
`;

export const DialogActions = styled(MuiDialogActions)`
  &.MuiDialogActions-root {
    padding: 0;
    margin-top: ${theme.spacing(3)};
    text-transform: normal;
  }
`;
