import { useMemo, useState } from 'react';

export function useOnFocus() {
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = useMemo(() => {
    return {
      onFocus: () => setIsFocus(true),
      onBlur: () => setIsFocus(false),
      focused: isFocus,
    };
  }, [isFocus]);

  return focusHandler;
}
