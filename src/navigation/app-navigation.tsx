import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {AuthStack, navigationRef} from '@navigation';
import SplashScreen from 'react-native-splash-screen';

export const AppNavigator = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <StatusBar translucent backgroundColor={'transparent'} />
        <AuthStack />
      </>
    </NavigationContainer>
  );
};
