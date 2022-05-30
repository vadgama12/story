import MuiFab from '@mui/material/Fab';
import styled, { css } from 'styled-components';
import { theme } from '../../appTheme';
import { FabProps } from './Fab';
import { Resolver } from '../../appTheme/types';

type ThemeResolver = Resolver<string>;

/**
 * For background color, update ::before styling
 * @param bgColor
 * @returns
 */
const getDisabledStyles = ({
  iconColor,
  textColor,
  bgColor,
}: {
  iconColor: ThemeResolver;
  textColor: ThemeResolver;
  bgColor: ThemeResolver;
}) => css`
  &:disabled {
    color: ${textColor};

    & > svg {
      color: ${iconColor};
    }
  }

  &:before {
    background: none;
  }

  &:after {
    background: ${bgColor};
  }
`;

interface GetElevation {
  defaultShadow: ThemeResolver;
  defaultFilter: ThemeResolver;
  hoverShadow: ThemeResolver;
  hoverFilter: ThemeResolver;
  focusShadow: ThemeResolver;
  focusFilter: ThemeResolver;
  activeShadow: ThemeResolver;
  activeFilter: ThemeResolver;
}

const getElevation = ({
  defaultShadow,
  defaultFilter,
  hoverShadow,
  hoverFilter,
  focusShadow,
  focusFilter,
  activeShadow,
  activeFilter,
}: GetElevation) => css`
  box-shadow: ${defaultShadow};
  filter: drop-shadow(${defaultFilter});

  &:hover {
    box-shadow: ${hoverShadow};
    filter: drop-shadow(${hoverFilter});
  }

  &:focus {
    box-shadow: ${focusShadow};
    filter: drop-shadow(${focusFilter});
  }

  &:active {
    box-shadow: ${activeShadow};
    filter: drop-shadow(${activeFilter});
  }
`;

/**
 * make container's background transparent, and use ::before for background color/gradients, and use ::after for semi-transparent background colors
 */
const baseStyles = css<FabProps>`
  ${theme.common('M3LabelLarge')};
  text-transform: none;
  background: transparent;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
  }

  &:before {
    z-index: -20;
  }

  &:after {
    z-index: -10;
  }

  &:hover {
    background: transparent;
  }

  &:active {
    background: transparent;
  }

  &:focus {
    background: transparent;
  }

  &:disabled {
    background: transparent;
    pointer-events: none;

    & > * {
      opacity: 0.38;
    }

    & > svg {
      opacity: 1;
    }
  }

  ${({ disabled, fabView }) =>
    disabled &&
    getDisabledStyles({
      iconColor: theme.color('fabDisabledIcons'),
      textColor: theme.color('fabDisabledText'),
      bgColor: theme.color(
        fabView === 'extended' ? 'OnSurfaceOpacity012' : 'fabDisabledBg'
      ),
    })};

  ${({ disabled }) =>
    !disabled &&
    getElevation({
      defaultShadow: theme.elevation('Elevation31'),
      defaultFilter: theme.elevation('Elevation30'),
      hoverShadow: theme.elevation('Elevation41'),
      hoverFilter: theme.elevation('Elevation40'),
      focusShadow: theme.elevation('Elevation31'),
      focusFilter: theme.elevation('Elevation30'),
      activeShadow: theme.elevation('Elevation31'),
      activeFilter: theme.elevation('Elevation30'),
    })};
`;

const fabViewBasedStyles = css<FabProps>`
  ${({ fabView }) => {
    switch (fabView) {
      case 'normal': {
        return css`
          border-radius: ${theme.common('fabBorderRadiusDefault')};
          height: ${theme.common('fabHeightDefault')};
          width: ${theme.common('fabWidthDefault')};

          & > svg {
            height: ${theme.common('fabIconSizeNormal')};
            width: ${theme.common('fabIconSizeNormal')};
          }
        `;
      }

      case 'large': {
        return css`
          border-radius: ${theme.common('fabBorderRadiusLarge')};
          height: ${theme.common('fabHeightLarge')};
          width: ${theme.common('fabWidthLarge')};

          & > svg {
            height: ${theme.common('fabIconSizeLarge')};
            width: ${theme.common('fabIconSizeLarge')};
          }
        `;
      }

      case 'extended': {
        return css`
          border-radius: ${theme.common('fabBorderRadiusDefault')};

          & > svg {
            margin-right: ${theme.spacing(1)};
            height: ${theme.common('fabIconSizeNormal')};
            width: ${theme.common('fabIconSizeNormal')};
          }
        `;
      }
    }
  }}
`;

interface GetBackground {
  hoverBgWithOpacity: ThemeResolver;
  focusBgWithOpacity: ThemeResolver;
  activeBgWithOpacity: ThemeResolver;
  defaultBg?: ThemeResolver;
  defaultGradient?: {
    color1: ThemeResolver;
    color2: ThemeResolver;
    color3: ThemeResolver;
  };
}

/**
 * Background color is set using ::before and ::after.
 * ::before is used for the button's background color
 * ::after is used for creating the transparency effects
 */
const getBackground = ({
  hoverBgWithOpacity,
  focusBgWithOpacity,
  activeBgWithOpacity,
  // defaultGradient is the default background for "surface" variant
  defaultGradient,
  defaultBg,
}: GetBackground) => css`
  &:hover:after {
    background: ${hoverBgWithOpacity};
  }

  &:focus:after {
    background: ${focusBgWithOpacity};
  }

  &:active:after {
    background: ${activeBgWithOpacity};
  }

  &:before {
    ${defaultBg &&
    css`
      background: ${defaultBg};
    `}

    ${defaultGradient &&
    css`
      background: linear-gradient(
          0deg,
          ${defaultGradient.color1},
          ${defaultGradient.color2}
        ),
        ${defaultGradient.color3};
    `};
  }
`;

/**
 * use "background" for linear-gradient
 * use ::before for non-transparent background
 * use ::after for transparent background
 */
const backgroundBasedStyles = css<FabProps>`
  ${({ background, disabled }) => {
    if (disabled) {
      return ``;
    }

    switch (background) {
      default:
      case 'surface': {
        return css`
          color: ${theme.color('Primary')};

          ${getBackground({
            hoverBgWithOpacity: theme.color('PrimaryOpacity008'),
            focusBgWithOpacity: theme.color('PrimaryOpacity012'),
            activeBgWithOpacity: theme.color('transparent'),
            defaultGradient: {
              color1: theme.color('Surface31'),
              color2: theme.color('Surface31'),
              color3: theme.color('Surface30'),
            },
          })};

          .MuiTouchRipple-child {
            background-color: ${theme.color('PrimaryOpacity012')};
          }
        `;
      }

      case 'primary': {
        return css`
          color: ${theme.color('OnPrimaryContainer')};

          ${getBackground({
            defaultBg: theme.color('PrimaryContainer'),
            hoverBgWithOpacity: theme.color('OnPrimaryContainerOpacity008'),
            focusBgWithOpacity: theme.color('OnPrimaryContainerOpacity012'),
            activeBgWithOpacity: theme.color('transparent'),
          })};

          .MuiTouchRipple-child {
            background-color: ${theme.color('OnPrimaryContainerOpacity012')};
          }
        `;
      }

      case 'secondary': {
        return css`
          color: ${theme.color('OnSecondaryContainer')};

          ${getBackground({
            defaultBg: theme.color('SecondaryContainer'),
            hoverBgWithOpacity: theme.color('OnSecondaryContainerOpacity008'),
            focusBgWithOpacity: theme.color('OnSecondaryContainerOpacity012'),
            activeBgWithOpacity: theme.color('transparent'),
          })};

          .MuiTouchRipple-child {
            background-color: ${theme.color('OnSecondaryContainerOpacity012')};
          }
        `;
      }

      case 'tertiary': {
        return css`
          color: ${theme.color('OnTertiaryContainer')};

          ${getBackground({
            defaultBg: theme.color('TertiaryContainer'),
            hoverBgWithOpacity: theme.color('OnTertiaryContainerOpacity008'),
            focusBgWithOpacity: theme.color('OnTertiaryContainerOpacity012'),
            activeBgWithOpacity: theme.color('transparent'),
          })};

          .MuiTouchRipple-child {
            background-color: ${theme.color('OnTertiaryContainerOpacity012')};
          }
        `;
      }
    }
  }}
`;

export const StyledFab = styled(({ fabView, background, ...rest }) => (
  <MuiFab {...rest} />
))<FabProps>`
  && {
    ${baseStyles};
    ${fabViewBasedStyles};
    ${backgroundBasedStyles};
  }
`;
