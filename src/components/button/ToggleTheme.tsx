import {IconButton, MoonIcon, SunIcon} from 'native-base';
import React from 'react';
import {useApp} from '../../app/app-context';

export const ToggleTheme = () => {
  const {toggleTheme, themeMode} = useApp();

  return (
    <IconButton
      onPress={toggleTheme}
      colorScheme={!themeMode ? 'light' : 'dark'}
      icon={themeMode ? <SunIcon /> : <MoonIcon />}
    />
  );
};
