import {AppContainer} from '@navigation';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

import {colorModeManager, themConfig, theme} from './share/layout';
import './translations/i18n.config';

const App = () => {
  return (
    <NativeBaseProvider
      config={themConfig}
      colorModeManager={colorModeManager}
      theme={theme}>
      <AppContainer />
    </NativeBaseProvider>
  );
};
export default App;
