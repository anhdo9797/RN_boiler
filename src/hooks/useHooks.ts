import React from 'react';

export const useToggle = (defaultValue?: boolean) => {
  const [value, setValue] = React.useState<boolean>(!!defaultValue);
  const toggle = () => setValue(!value);
  return {isToggle: value, toggle};
};
