import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import styled, { css } from 'styled-components';
import { theme } from '../../appTheme';
import { NavigationDrawerProps } from './NavigationDrawer';

export const StyledNavigationDrawer = styled.div<NavigationDrawerProps>`
  display: flex;

  .MuiPaper-root {
    background-color: ${theme.color('Surface')};
    color: ${theme.color('OnSecondaryContainer')};
    padding-left: ${theme.spacing(1.5)};
    padding-right: ${theme.spacing(1.5)};
  }

  .MuiSvgIcon-root {
    color: ${theme.color('Primary')};
  }

  .MuiListItemText-root {
    margin: 0;
    & .MuiTypography-root {
      ${theme.common('M3LabelLarge')};
      color: ${theme.color('OnSurfaceVariant')};
    }
  }

  .MuiListItemIcon-root {
    min-width: ${theme.spacing(4.5)};
  }

  .MuiList-root .MuiButtonBase-root {
    min-width: ${theme.spacing(4.5)};
    border-radius: ${theme.borderRadius('large')};
    padding: ${theme.spacing(2)};

    &.Mui-selected {
      background-color: ${theme.color('SecondaryContainer')};

      &:hover {
        background-color: ${theme.color('SecondaryContainer')};
      }

      & .MuiTypography-root {
        color: ${theme.color('OnSecondaryContainer')};
      }
    }

    &:hover {
      background-color: ${theme.color('SecondaryContainer')};
    }

    ${({ open }) =>
      !open &&
      css`
        padding-top: ${theme.spacing(0.5)};
        padding-bottom: ${theme.spacing(0.5)};
        padding-left: ${theme.spacing(2)};
        padding-right: ${theme.spacing(2)};
      `};
  }
`;

export const ListItemTextCollapsed = styled.div`
  cursor: pointer;
  ${theme.common('M3LabelMedium')};
  color: ${theme.color('OnSurfaceVariant')};
  padding-top: ${theme.spacing(0.5)};
`;

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & .MuiButtonBase-root {
    width: ${theme.spacing(6)};
    height: ${theme.spacing(6)};
    margin-bottom: ${theme.spacing(3)};
    margin-top: ${theme.spacing(3)};
    margin-left: ${theme.spacing(0.5)};
    margin-right: ${theme.spacing(1.5)};

    &:hover {
      background-color: ${theme.color('SecondaryContainer')};
    }
  }
`;

export const NestedDropdownStyled = styled.div`
  && .MuiButtonBase-root {
    padding: 0;
  }
`;

export const NestedDropdownHeader = styled.div`
  display: flex;
  align-items: center;

  && > .MuiButtonBase-root {
    margin-left: auto;
    height: ${theme.spacing(4.5)};
    margin-top: -${theme.spacing(1)};
    margin-bottom: -${theme.spacing(1)};

    &:hover {
      background-color: ${theme.common('M3RefPrimaryPrimary80')};
    }
  }
`;

export const NestedDropdownContent = styled.div`
  margin-top: ${theme.spacing(2)};
`;

interface NestedDropdownContentItemProps extends MuiButtonProps {
  isSelected: boolean;
}

export const NestedDropdownContentItem = styled(({ isSelected, ...rest }) => (
  <MuiButton {...rest} />
))<NestedDropdownContentItemProps>`
  &&.MuiButton-root {
    ${theme.common('M3LabelLarge')};
    padding-left: ${theme.spacing(2)};
    padding-right: ${theme.spacing(2)};
    padding-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(1)};
    border-radius: ${theme.borderRadius('medium')};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    text-transform: none;

    &:hover {
      background-color: ${theme.common('M3RefPrimaryPrimary80')};
    }

    &:not(:last-child) {
      margin-bottom: ${theme.spacing(0.5)};
    }

    ${({ isSelected }) =>
      isSelected
        ? css`
            color: ${theme.color('OnSecondaryContainer')};
            background-color: ${theme.common('M3RefPrimaryPrimary80')};
          `
        : css`
            color: ${theme.color('OnSurfaceVariant')};
          `};
  }
`;
