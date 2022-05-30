import { css } from 'styled-components';
import { theme } from '../appTheme';

export const inputBaseStyles = css`
  .MuiInputBase-root {
    height: ${theme.spacing(7)};
    border-radius: ${theme.spacing(1)};
    border: 1px solid ${theme.color('Outline')};
    background-color: ${theme.color('Surface')};

    & fieldset,
    & + fieldset,
    &:after,
    &:before,
    &:hover:after,
    &:hover:before {
      border: none;
    }

    &.Mui-focused {
      border-color: ${theme.color('transparent')};
      box-shadow: inset 0 0 0 2px ${theme.color('Primary')};

      & .MuiInputBase-input {
        background-color: ${theme.color('transparent')};
      }
    }

    &.Mui-disabled {
      background: ${theme.common('M3RefNeutralNeutral90')};
      border: 1px solid ${theme.common('M3RefNeutralNeutral50')};

      .MuiInputAdornment-root {
        color: ${theme.common('M3RefNeutralNeutral50')};
      }
    }

    &.Mui-error {
      border-color: ${theme.color('Error')};

      &.Mui-focused {
        border-color: ${theme.color('transparent')};
        box-shadow: inset 0 0 0 2px ${theme.color('Error')};
      }

      .MuiInputAdornment-root {
        color: ${theme.color('Error')};
      }
    }
  }

  .MuiInputAdornment-root {
    color: ${theme.color('Primary')};
  }

  .MuiInputBase-input {
    ${theme.common('M3BodyLarge')};
    border-radius: ${theme.spacing(1)};
    background-color: ${theme.color('transparent')};
    color: ${theme.color('OnSurface')};

    & + fieldset {
      border: none;
    }

    &.Mui-disabled {
      color: ${theme.common('M3RefNeutralNeutral50')};
      -webkit-text-fill-color: ${theme.common('M3RefNeutralNeutral50')};
    }
  }

  .MuiInputLabel-root {
    ${theme.common('M3BodyLarge')};
    color: ${theme.color('Outline')};

    &.Mui-disabled {
      color: ${theme.common('M3RefNeutralNeutral50')};
    }

    &.MuiInputLabel-shrink {
      color: ${theme.color('Primary')};
      font-weight: ${({ theme: styledTheme }) =>
        (theme.common('M3LabelMedium')(styledTheme) as any)?.fontWeight};
    }

    &.Mui-disabled.MuiInputLabel-shrink {
      color: ${theme.common('M3RefNeutralNeutral50')};
    }

    &.Mui-error {
      color: ${theme.color('Error')};
    }
  }

  .MuiFormHelperText-root {
    ${theme.common('M3BodyMedium')};
    text-align: right;
    margin: 0;
    color: ${theme.common('M3RefNeutralNeutral50')};

    &.Mui-error {
      color: ${theme.color('Error')};
    }
  }
`;
