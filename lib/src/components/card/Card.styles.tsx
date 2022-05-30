import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';
import styled, { css } from 'styled-components';
import { theme } from '../../appTheme';
import { CardProps } from './Card';
import MuiTypography from '@mui/material/Typography';

const viewBasedStyles = css<{ cardView: CardProps['cardView'] }>`
  ${({ cardView }) => {
    switch (cardView) {
      default:
      case 'outlined': {
        return css`
          background-color: ${theme.color('Surface')};
          border: 1px solid ${theme.color('Outline')};
          box-shadow: none;
        `;
      }

      case 'raised': {
        return css`
          background-color: ${theme.color('Surface')};
          border: none;
          box-shadow: ${theme.elevation('Elevation21')},
            ${theme.elevation('Elevation20')};
        `;
      }

      case 'muted': {
        return css`
          background-color: ${theme.color('SurfaceVariant')};
          border: none;
          box-shadow: none;
        `;
      }
    }
  }}
`;

interface CardStyledProps extends MuiCardProps {
  cardView: CardProps['cardView'];
}

export const CardStyled = styled(({ cardView, ...rest }) => (
  <MuiCard {...rest} />
))<CardStyledProps>`
  &.MuiCard-root {
    text-align: left;
    width: ${theme.spacing(45)};
    border-radius: ${theme.common('cardBorderRadius')};

    ${viewBasedStyles};
  }
`;

export const HeaderTitle = styled(MuiTypography)`
  &.MuiTypography-root {
    ${theme.common('M3TitleMedium')};
    color: ${theme.color('OnSurface')};
  }
`;

export const HeaderSubtitle = styled(MuiTypography)`
  &.MuiTypography-root {
    ${theme.common('M3BodyMedium')};
    color: ${theme.color('OnSurface')};
  }
`;

export const Title = styled(({ cardView, ...rest }) => (
  <MuiTypography {...rest} />
))<{
  cardView: CardProps['cardView'];
}>`
  &.MuiTypography-root {
    ${theme.common('M3BodyLarge')}
    color: ${theme.color('OnSurface')};

    ${({ cardView }) => css`
      color: ${theme.color(
        cardView === 'muted' ? 'OnSurfaceVariant' : 'OnSurface'
      )};
    `}
  }
`;

export const Subtitle = styled(MuiTypography)`
  &.MuiTypography-root {
    ${theme.common('M3BodyMedium')}
    color: ${theme.color('OnSurfaceVariant')};
  }
`;

export const Description = styled(MuiTypography)`
  &.MuiTypography-root {
    ${theme.common('M3BodyMedium')}
    color: ${theme.color('OnSurfaceVariant')};
  }
`;

export const HeaderAvatar = styled(MuiTypography)`
  &.MuiTypography-root {
    ${theme.common('M3TitleMedium')};
    color: ${theme.color('Surface')};
  }
`;

export const HeaderRight = styled.div<{ headerOnly?: boolean }>`
  height: ${({ headerOnly }) => (headerOnly ? '5rem' : '4.5rem')};
  width: ${({ headerOnly }) => (headerOnly ? '5rem' : '4.5rem')};
  color: ${theme.color('Outline')};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.25rem 0.5rem 0.25rem 0;
`;

export const HeaderRightImage = styled.img`
  margin-right: -1rem;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
