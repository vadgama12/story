import MuiButton from '@mui/material/Button';
import styled, { css } from 'styled-components';
import type { ButtonProps } from './Button';
import { theme } from '../../appTheme';
import { Resolver } from '../../appTheme/types';

type Color = Resolver<string>;
type BgColor = Resolver<string>;
type BoxShadow = Resolver<string>;

export const TextWrapper = styled.span`
  pointer-events: none;
`;

export const IconWrapper = styled.span`
  margin-right: ${theme.spacing(1)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  min-width: 18px;
  height: 18px;
`;

const baseStyles = css<ButtonProps>`
  ${theme.common('M3LabelLarge')};
  position: relative;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  user-select: none;
  appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  height: ${theme.spacing(5)};
  padding: 0;
  padding-right: ${theme.spacing(3)};
  padding-left: ${({ icon }) => theme.spacing(icon ? 2 : 3)};
  border-radius: ${theme.borderRadius('rounded')};
  z-index: 0;

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
    cursor: pointer;
  }

  &:disabled {
    pointer-events: none;

    & > ${TextWrapper} {
      opacity: 0.38;
    }

    & > ${IconWrapper} {
      opacity: 0.38;
    }
  }
`;

interface GetBackground {
  defaultBg: BgColor;
  hoverBg?: BgColor;
  hoverOpacity?: number;
  focusBg?: BgColor;
  focusOpacity?: number;
  activeBg?: BgColor;
  activeOpacity?: number;
  hoverBg2?: BgColor;
  hoverOpacity2?: number;
  focusBg2?: BgColor;
  focusOpacity2?: number;
  activeBg2?: BgColor;
  activeOpacity2?: number;
}

/**
 * Background color is set using ::before and ::after.
 * ::before is used for the button's background color
 * ::after is used for creating the lighten/darken effect
 *
 * for background effect hoverOpacity or hoverOpacity2 can be used. Similar approach applies for focus and active state.
 * hoverOpacity: this is used in the case background color is semi-transparent
 * hoverOpacity2: this is used in the case background is not transparent but lighten/darken effect is needed
 */
const getBackground = ({
  defaultBg,
  hoverBg,
  hoverOpacity,
  focusBg,
  focusOpacity,
  activeBg,
  activeOpacity,
  hoverBg2,
  hoverOpacity2,
  focusBg2,
  focusOpacity2,
  activeBg2,
  activeOpacity2,
}: GetBackground) => css`
  &:before {
    background-color: ${defaultBg};
  }

  &:hover:before {
    background-color: ${hoverBg};
    ${hoverOpacity !== undefined &&
    css`
      opacity: ${hoverOpacity};
    `}
  }

  &:focus:before {
    background-color: ${focusBg};
    ${focusOpacity !== undefined &&
    css`
      opacity: ${focusOpacity};
    `}
  }

  &:active:before {
    background-color: ${activeBg};
    ${activeOpacity !== undefined &&
    css`
      opacity: ${activeOpacity};
    `}
  }

  &:hover:after {
    background-color: ${hoverBg2};
    ${hoverOpacity2 !== undefined &&
    css`
      opacity: ${hoverOpacity2};
    `}
  }

  &:focus:after {
    background-color: ${focusBg2};
    ${focusOpacity2 !== undefined &&
    css`
      opacity: ${focusOpacity2};
    `}
  }

  &:active:after {
    background-color: ${activeBg2};
    ${activeOpacity2 !== undefined &&
    css`
      opacity: ${activeOpacity2};
    `}
  }
`;

const getBoxShadow = ({
  hoverBoxShadow,
  nonHoverBoxShadow,
}: {
  hoverBoxShadow?: BoxShadow;
  nonHoverBoxShadow?: BoxShadow;
}) => css`
  box-shadow: ${nonHoverBoxShadow || (() => 'none')};

  &:hover {
    box-shadow: ${hoverBoxShadow || (() => 'none')};
  }

  &:active,
  &:focus {
    box-shadow: ${nonHoverBoxShadow || (() => 'none')};
  }
`;

/**
 * For background color, update ::before styling
 * @param bgColor
 * @returns
 */
const getDisabledStyles = ({
  color,
  bgColor,
  bgOpacity,
  borderColor,
  borderOpacity,
}: {
  bgColor: BgColor;
  color: Color;
  bgOpacity: number;
  borderColor?: Color;
  borderOpacity?: number;
}) => css`
  color: ${color};

  &:before {
    background-color: ${bgColor};
    opacity: ${bgOpacity};
  }

  &:after {
    ${borderColor &&
    css`
      border: 1px solid ${borderColor};
    `}

    ${borderOpacity &&
    css`
      opacity: ${borderOpacity};
    `}
  }
`;

/**
 * for border user the ::after element
 */
const getBorderStyles = ({
  defaultBorderColor,
  hoverBorderColor,
  focusBorderColor,
  activeBorderColor,
}: {
  defaultBorderColor: Color;
  hoverBorderColor: Color;
  focusBorderColor: Color;
  activeBorderColor: Color;
}) => css`
  &:after {
    border: 1px solid ${defaultBorderColor};
  }

  &:hover:after {
    border: 1px solid ${hoverBorderColor};
  }

  &:focus:after {
    border: 1px solid ${focusBorderColor};
  }

  &:active:after {
    border: 1px solid ${activeBorderColor};
  }
`;

/**
 * Based on different variations of the buttons, following utils can be used.
 * getDisabledStyles: Defines disabled styles
 * getBackground: Defines the background color
 * getBoxShadow: Defines Box-shadow
 * getBorderStyles: Defines borders
 */
export const StyledButton = styled(({ buttonView, icon, ...rest }) => (
  <MuiButton {...rest} />
))`
  &&& {
    ${baseStyles};

    ${({ buttonView, disabled }) => {
      switch (buttonView) {
        default:
        case 'filled': {
          return css`
            color: ${theme.color('OnPrimary')};

            ${disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('disabledBg'),
              bgOpacity: 0.12,
            })}

            ${!disabled &&
            getBackground({
              defaultBg: theme.color('Primary'),
              hoverBg: theme.color('Primary'),
              focusBg: theme.color('Primary'),
              activeBg: theme.color('Primary'),
              hoverBg2: theme.color('OnPrimary'),
              hoverOpacity2: 0.08,
              focusBg2: theme.color('OnPrimary'),
              focusOpacity2: 0.12,
              activeBg2: theme.color('OnPrimary'),
              activeOpacity2: 0.12,
            })};

            ${!disabled &&
            getBoxShadow({
              hoverBoxShadow: theme.color('elevation1'),
            })}
          `;
        }

        case 'outlined': {
          return css`
            color: ${theme.color('Primary')};

            ${disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('transparent'),
              bgOpacity: 0.12,
              borderColor: theme.color('disabledBorder'),
              borderOpacity: 0.12,
            })}

            ${!disabled &&
            getBackground({
              defaultBg: theme.color('transparent'),
              hoverBg: theme.color('textButtonBg'),
              hoverOpacity: 0.08,
              focusBg: theme.color('textButtonBg'),
              focusOpacity: 0.12,
              activeBg: theme.color('textButtonBg'),
              activeOpacity: 0.12,
            })};

            ${!disabled &&
            getBorderStyles({
              defaultBorderColor: theme.color('Outline'),
              hoverBorderColor: theme.color('Outline'),
              focusBorderColor: theme.color('Primary'),
              activeBorderColor: theme.color('Outline'),
            })}
          `;
        }

        case 'text': {
          return css`
            color: ${theme.color('Primary')};
            padding-left: ${theme.spacing(1.5)};
            padding-right: ${theme.spacing(1.5)};

            ${disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'), // end with 66 for 38% opacity
              bgColor: theme.color('transparent'),
              bgOpacity: 0,
            })}

            ${!disabled &&
            getBackground({
              defaultBg: theme.color('transparent'),
              hoverBg: theme.color('textButtonBg'),
              hoverOpacity: 0.08,
              focusBg: theme.color('textButtonBg'),
              focusOpacity: 0.12,
              activeBg: theme.color('textButtonBg'),
              activeOpacity: 0.12,
            })};
          `;
        }

        case 'elevated': {
          return css`
            color: ${theme.color('Primary')};

            ${disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('disabledBg'),
              bgOpacity: 0.12,
            })}

            ${!disabled && `filter: ${theme.color('elevationFilter')}`}
          
          ${!disabled &&
            getBoxShadow({
              nonHoverBoxShadow: theme.color('elevation1'),
              hoverBoxShadow: theme.color('elevation2'),
            })}


          ${!disabled &&
            getBackground({
              defaultBg: theme.color('elevatedDefaultBg'),
              hoverBg: theme.color('elevatedHoverBg'),
              focusBg: theme.color('elevatedFocusBg'),
              activeBg: theme.color('elevatedActiveBg'),
            })};
          `;
        }

        case 'tonal': {
          return css`
            color: ${theme.color('OnSecondaryContainer')};

            ${disabled &&
            getDisabledStyles({
              color: theme.color('OnSurface'),
              bgColor: theme.color('disabledBg'),
              bgOpacity: 0.12,
            })}

            ${!disabled &&
            getBackground({
              defaultBg: theme.color('SecondaryContainer'),
              hoverBg2: theme.color('tonalHoverBg'),
              hoverOpacity2: 0.08,
              focusBg2: theme.color('tonalHoverBg'),
              focusOpacity2: 0.12,
              activeBg2: theme.color('tonalHoverBg'),
              activeOpacity2: 0.12,
            })};

            ${!disabled &&
            getBoxShadow({
              hoverBoxShadow: theme.color('elevation1'),
            })}
          `;
        }
      }
    }}
  }
`;
