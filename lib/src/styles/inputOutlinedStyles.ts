import { css } from 'styled-components';
import { theme } from '../appTheme';

export const inputOutlinedStyles = (hasStartAdornment: boolean) => css`
  .MuiInputBase-root {
    padding-left: ${theme.spacing(hasStartAdornment ? 2 : 0)};
  }

  .MuiOutlinedInput-input {
    padding: ${theme.spacing(hasStartAdornment ? 0 : 2)};
  }

  && .MuiInputAdornment-root {
    margin-top: ${theme.spacing(0.25)};
  }
`;
