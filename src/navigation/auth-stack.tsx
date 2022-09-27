import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, RegisterScreen} from '@screens';

import React from 'react';
import {APP_SCREEN, RootStackParamList} from './screen-types';

const RootStack = createStackNavigator<RootStackParamList>();

export function AuthStack() {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={APP_SCREEN.LOGIN} component={LoginScreen} />
      <RootStack.Screen name={APP_SCREEN.REGISTER} component={RegisterScreen} />
    </RootStack.Navigator>
  );
}
