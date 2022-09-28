import {} from '@components';
import {IconButton, MoonIcon, SunIcon, useColorMode} from 'native-base';
import React from 'react';

export const ToggleTheme = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <IconButton
      onPress={toggleColorMode}
      colorScheme={!isDark ? 'light' : 'dark'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
    />
  );
};
