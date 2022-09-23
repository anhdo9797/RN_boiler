/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {LoginScreen} from './src/screens';
import {colorModeManager, themConfig, theme} from './src/share/layout';
import './src/translations/i18n.config';

const App = () => {
  return (
    <NativeBaseProvider
      config={themConfig}
      colorModeManager={colorModeManager}
      theme={theme}>
      <LoginScreen />
    </NativeBaseProvider>
  );
};
export default App;
