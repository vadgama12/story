import React from 'react';
import { StarIconOnCardHeader } from '../icons';
import { CardProps } from './Card';

export const MOCK_PROPS: CardProps = {
  cardView: 'muted',
  headerOnly: false,
  headerAvatar: 'A',
  headerEndIcon: <StarIconOnCardHeader />,
  headerTitle: 'Header',
  headerSubtitle: 'Subhead',
  image: {
    src: 'https://i.ibb.co/WKBYMK2/placeholder-image.png',
    altText: 'Placeholder image',
    title: 'Placeholder image',
  },
  title: 'Title',
  subtitle: 'Subhead',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  buttons: [
    { buttonView: 'outlined', children: 'Action' },
    { children: 'Action' },
  ],
};
