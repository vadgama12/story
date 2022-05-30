import React, { useCallback, useState } from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import { StyledTextField } from './TextField.styles';
import { useInputLabelShrink } from '../../hooks/useInputLabelShrink';

/**
 * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
export const TextField: React.FC<MuiTextFieldProps> = (props) => {
  const { shrink, onFocus, onBlur } = useInputLabelShrink({
    value: props?.value,
    onBlur: props?.onBlur,
  });

  return (
    <StyledTextField
      {...props}
      variant={props.label ? 'filled' : 'outlined'}
      onFocus={onFocus}
      onBlur={onBlur}
      InputLabelProps={{
        shrink,
        ...(props?.InputLabelProps || {}),
      }}
    />
  );
};
