import MuiTextField from '@mui/material/TextField';
import styled, { css } from 'styled-components';
import { theme } from '../../appTheme';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { inputBaseStyles } from '../../styles/inputBaseStyles';
import { inputOutlinedStyles } from '../../styles/inputOutlinedStyles';
import { inputFilledStyles } from '../../styles/inputFilledStyles';

const variantBasedSpacing = css<MuiTextFieldProps>`
  ${({ variant, InputProps }) => {
    const hasStartAdornment = !!InputProps?.startAdornment;

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

export const StyledTextField = styled(MuiTextField)<MuiTextFieldProps>`
  && {
    ${inputBaseStyles};
    ${variantBasedSpacing};
  }
`;
