import styled, { css } from 'styled-components';
import { inputBaseStyles } from '../../styles/inputBaseStyles';
import { inputFilledStyles } from '../../styles/inputFilledStyles';
import { inputOutlinedStyles } from '../../styles/inputOutlinedStyles';
import { SelectProps } from './Select';
import MuiMenuItem from '@mui/material/MenuItem';
import { theme } from '../../appTheme';

const variantBasedSpacing = css<SelectProps>`
  ${({ label, muiSelectProps }) => {
    const hasStartAdornment = !!muiSelectProps?.startAdornment;
    const variant = label ? 'filled' : 'outlined';

    switch (variant) {
      case 'outlined': {
        return inputOutlinedStyles(hasStartAdornment);
      }

      case 'filled':
      default: {
        return inputFilledStyles(hasStartAdornment);
      }
    }
  }}
`;

export const SelectWrapper = styled.div<SelectProps>`
  && {
    ${inputBaseStyles};
    ${variantBasedSpacing};

    .MuiSvgIcon-root {
      color: ${theme.color('Outline')};
    }
  }
`;

export const MenuItemStyled = styled(MuiMenuItem)`
  &.MuiMenuItem-root {
    ${theme.common('M3BodyLarge')};
    background-color: ${theme.color('transparent')};

    &:hover {
      color: ${theme.color('OnSurface')};
      background-color: ${theme.color('SecondaryContainer')};
    }
  }

  &&.Mui-focusVisible {
  &&.Mui-selected {
    background-color: ${theme.color('SecondaryContainer')};
    color: ${theme.color('OnSurface')};

    &:hover {
      background-color: ${theme.color('SecondaryContainer')};
    }
  }
`;
