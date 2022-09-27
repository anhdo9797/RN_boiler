import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {AuthStack, navigationRef} from '@navigation';

export const AppContainer = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <AuthStack />
      </>
    </NavigationContainer>
  );
};
