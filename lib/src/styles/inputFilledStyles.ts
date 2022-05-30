import { css } from 'styled-components';
import { theme } from '../appTheme';

export const inputFilledStyles = (hasStartAdornment: boolean) => css`
  .MuiInputBase-root {
    padding-left: ${theme.spacing(hasStartAdornment ? 2 : 0)};
  }

  .MuiFilledInput-input {
    padding-left: ${theme.spacing(hasStartAdornment ? 0 : 2)};
  }

  .MuiInputLabel-root {
    margin-left: ${theme.spacing(hasStartAdornment ? 4.625 : 0.5)};
  }

  && .MuiInputAdornment-root {
    margin-top: ${theme.spacing(0.25)};
  }
`;
