import {AppNavigator} from '@navigation';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

import {colorModeManager, themConfig, getTheme} from '../share/layout';
import '../translations/i18n.config';
import {AppProvider, useApp} from './app-context';

const NativeBaseWrapper = () => {
  const {themeMode} = useApp();
  return <AppNavigator />;
};

const App = () => {
  return (
    <NativeBaseProvider
      config={themConfig}
      // colorModeManager={colorModeManager}
      theme={getTheme()}>
      <AppProvider>
        <NativeBaseWrapper />
      </AppProvider>
    </NativeBaseProvider>
  );
};
export default App;
