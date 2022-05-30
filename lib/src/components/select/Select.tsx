import React, { useEffect, useRef, useState } from 'react';
import MuiSelect, {
  SelectProps as MuiSelectProps,
  SelectChangeEvent,
} from '@mui/material/Select';
import MuiFormControl, {
  FormControlProps as MuiFormControlProps,
} from '@mui/material/FormControl';
import { SelectWrapper, MenuItemStyled } from './Select.styles';
import MuiInputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { InputLabelProps as MuiInputLabelProps } from '@mui/material/InputLabel';
import { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { useInputLabelShrink } from '../../hooks/useInputLabelShrink';
import { useTheme } from '../../appTheme';

export interface SelectProps {
  value: string;
  options: { text: string; value: string }[];
  handleChange: (event: SelectChangeEvent<unknown>) => void;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  muiSelectProps?: MuiSelectProps;
  muiInputLabelProps?: MuiInputLabelProps;
  muiFormControlProps?: MuiFormControlProps;
  muiMenuItemProps?: MuiMenuItemProps;
}

/**
 * Select components are used for collecting user provided information from a list of options.
 */
export const Select: React.FC<SelectProps> = (props) => {
  const {
    value,
    options,
    handleChange,
    label,
    disabled,
    error,
    helperText,
    muiSelectProps,
    muiInputLabelProps,
    muiFormControlProps,
    muiMenuItemProps,
  } = props;

  const theme = useTheme();

  const { shrink, onFocus, onBlur } = useInputLabelShrink({
    value,
    onFocus: muiSelectProps?.onFocus,
    onBlur: muiSelectProps?.onBlur,
  });

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement>();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef?.current) setAnchorEl(rootRef.current);
  }, []);

  return (
    <SelectWrapper {...props}>
      <MuiFormControl
        ref={rootRef}
        fullWidth
        variant={label ? 'filled' : 'outlined'}
        disabled={disabled}
        error={error}
        {...muiFormControlProps}
      >
        {label && (
          <MuiInputLabel
            children={label}
            shrink={shrink}
            {...muiInputLabelProps}
          />
        )}
        <MuiSelect
          fullWidth
          displayEmpty
          value={value}
          label={label}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          MenuProps={{
            anchorEl,
            MenuListProps: anchorEl?.offsetWidth
              ? {
                  sx: {
                    width: anchorEl?.offsetWidth,
                    backgroundColor: theme.color('Surface11'),
                  },
                }
              : {},
          }}
          {...muiSelectProps}
        >
          {options?.map(({ text, value }) => (
            <MenuItemStyled key={value} value={value} {...muiMenuItemProps}>
              {text}
            </MenuItemStyled>
          ))}
        </MuiSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </MuiFormControl>
    </SelectWrapper>
  );
};
