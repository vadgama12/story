import React, { ReactNode } from 'react';
import {
  CardStyled,
  HeaderTitle,
  HeaderSubtitle,
  Title,
  Subtitle,
  Description,
  HeaderAvatar,
  HeaderRight,
  HeaderRightImage,
} from './Card.styles';
import { ButtonProps } from '../button/Button';
import { CardProps as MuiCardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useTheme } from '../../appTheme';
import { Button } from '../button';

export interface CardProps {
  cardView: 'outlined' | 'raised' | 'muted';
  headerOnly?: boolean;
  headerAvatar: ReactNode;
  headerEndIcon: ReactNode;
  headerTitle: string;
  headerSubtitle: string;
  image: {
    src: string;
    altText: string;
    title?: string;
    srcSet?: string;
  };
  title: string;
  subtitle: string;
  description: string;
  buttons: ButtonProps[];
  muiCardProps?: MuiCardProps;
}

/**
 * Cards contain content and actions that relate information about a subject.
 */
export const Card: React.FC<CardProps> = (props) => {
  const {
    cardView,
    headerOnly,
    headerAvatar,
    headerEndIcon,
    headerTitle,
    headerSubtitle,
    image,
    title,
    subtitle,
    description,
    buttons,
    muiCardProps,
  } = props;

  const theme = useTheme();

  return (
    <CardStyled cardView={cardView} {...muiCardProps}>
      <CardHeader
        sx={{ p: 0, px: '1rem' }}
        avatar={
          <Avatar
            sx={{
              bgcolor: theme.color('Primary'),
            }}
          >
            <HeaderAvatar>{headerAvatar}</HeaderAvatar>
          </Avatar>
        }
        title={<HeaderTitle>{headerTitle}</HeaderTitle>}
        subheader={
          <HeaderSubtitle sx={{ mt: '0.25rem' }}>
            {headerSubtitle}
          </HeaderSubtitle>
        }
        action={
          // HeaderRight determines the height of the header through it's content height
          <HeaderRight headerOnly={headerOnly}>
            {headerOnly ? (
              <HeaderRightImage src={image.src} />
            ) : (
              <Box sx={{ mr: '0.25rem' }}>{headerEndIcon}</Box>
            )}
          </HeaderRight>
        }
      />

      {!headerOnly && (
        <>
          <CardMedia
            component='img'
            height='188'
            image={image.src}
            alt={image.altText}
            srcSet={image.srcSet}
          />

          <CardContent>
            <Title cardView={cardView}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Box sx={{ mt: '2rem' }} />
            <Description>{description}</Description>
          </CardContent>

          <CardActions
            disableSpacing
            sx={{ justifyContent: 'flex-end', p: '1rem' }}
          >
            {buttons.map((buttonProps, index) => (
              <React.Fragment key={index}>
                {index > 0 && <Box sx={{ ml: '0.5rem' }} />}
                <Button {...buttonProps} />
              </React.Fragment>
            ))}
          </CardActions>
        </>
      )}
    </CardStyled>
  );
};
