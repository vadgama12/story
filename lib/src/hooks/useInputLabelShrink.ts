import React, { useCallback, useState } from 'react';

interface UseInputLabelShrinkProps {
  value: unknown;
  onFocus?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const useInputLabelShrink = (props: UseInputLabelShrinkProps) => {
  const { value, onFocus: onFocusProp, onBlur: onBlurProp } = props;

  const [shrink, setShrink] = useState<boolean>(
    (typeof value === 'string' && value.length !== 0) ||
      (typeof value === 'number' && String(value).length !== 0) ||
      false
  );

  const onFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setShrink(true);
      if (onFocusProp) {
        onFocusProp(event);
      }
    },
    [props]
  );

  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.target.value.length === 0) {
        setShrink(false);
      }
      if (onBlurProp) {
        onBlurProp(event);
      }
    },
    [props]
  );

  return {
    shrink,
    onFocus,
    onBlur,
  };
};
