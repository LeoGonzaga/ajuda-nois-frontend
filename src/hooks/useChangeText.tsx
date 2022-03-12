import { useCallback, useState } from 'react';

export const useChangeText = (value?: any) => {
  const [text, setText] = useState<string>('' || value);

  const handleChange = useCallback((value) => {
    setText(value.target.value);
  }, []);

  return [text, handleChange] as const;
};
