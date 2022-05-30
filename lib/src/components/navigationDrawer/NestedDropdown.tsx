import React, { ReactNode, useState } from 'react';
import {
  NestedDropdownStyled,
  NestedDropdownHeader,
  NestedDropdownContent,
  NestedDropdownContentItem,
} from './NavigationDrawer.styles';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

interface NestedDropdownProps {
  icon: ReactNode;
  label: string;
  handleItemClick: (selectedLabel: string, selectedSubLabel?: string) => void;
  selectedLabel: string;
  subLabels?: string[];
  selectedSubLabel?: string;
}

export const NestedDropdown = ({
  icon,
  label,
  selectedLabel,
  handleItemClick,
  subLabels,
  selectedSubLabel,
}: NestedDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <NestedDropdownStyled>
      <NestedDropdownHeader>
        <ListItemIcon>{icon}</ListItemIcon>
        <span>{label}</span>

        {subLabels && subLabels?.length > 0 && (
          <IconButton
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen);
            }}
            color='inherit'
            sx={{ padding: 0 }}
          >
            {isDropdownOpen ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowRightRoundedIcon />
            )}
          </IconButton>
        )}
      </NestedDropdownHeader>
      {isDropdownOpen && subLabels && subLabels?.length > 0 && (
        <NestedDropdownContent>
          {subLabels?.map((subLabel, index) => (
            <NestedDropdownContentItem
              key={index}
              onClick={() => handleItemClick(label, subLabel)}
              isSelected={
                selectedLabel === label && subLabel === selectedSubLabel
              }
            >
              {subLabel}
            </NestedDropdownContentItem>
          ))}
        </NestedDropdownContent>
      )}
    </NestedDropdownStyled>
  );
};
