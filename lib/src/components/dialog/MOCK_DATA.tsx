import { DialogProps } from './Dialog';
import { MobileCheckedIcon } from '../icons';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '../../appTheme';

export const DIALOG_LIST = () => {
  const theme = useTheme();
  return (
    <Box sx={{ font: 'inherit' }}>
      {[
        {
          avatar: 'A',
          description: '1-line item',
          checkboxLabel: 'Meta',
          checked: true,
        },
        {
          avatar: 'A',
          description: '1-line item',
          checkboxLabel: 'Meta',
          checked: true,
        },
        {
          avatar: 'A',
          description: '1-line item',
          checkboxLabel: 'Meta',
          checked: true,
        },
      ].map(({ avatar, description, checkboxLabel, checked }, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            borderBottom: `1px solid ${theme.color('Outline')}`,
            py: '0.5rem',
            font: 'inherit',
          }}
        >
          <Avatar
            sx={{
              bgcolor: theme.color('Primary'),
              color: theme.color('Surface30'),
              font: 'inherit',
              fontWeight: 600,
              fontSize: '0.875rem',
              lineHeight: '2.5rem',
            }}
          >
            {avatar}
          </Avatar>
          <Box sx={{ mr: '1rem' }} />
          <div>{description}</div>
          <Box sx={{ mr: 'auto' }} />
          <div>{checkboxLabel}</div>
          <Checkbox
            sx={{
              color: theme.color('Primary'),
              '&.Mui-checked': {
                color: theme.color('Primary'),
              },
            }}
            defaultChecked={checked}
          />
        </Box>
      ))}
    </Box>
  );
};

export const DIALOG_PROPS: DialogProps = {
  open: true,
  onClose: () => '',
  title: 'Dialog title',
  description:
    'A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.',
  heroIcon: <MobileCheckedIcon />,
  children: <DIALOG_LIST />,
  buttons: [
    { buttonView: 'text', children: 'Action 2' },
    { buttonView: 'text', children: 'Action 1' },
  ],
};
