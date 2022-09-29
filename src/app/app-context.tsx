import {THEME_MODE, TOKEN} from '@configs';
import {useToggle} from '@hooks';
import {User} from '@models';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {useColorMode} from 'native-base';
import React, {createContext, useContext, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

interface AppProps {
  user?: User;
  themeMode: 'dark' | 'light';
  isLoading: boolean;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppProps>({
  user: {},
  themeMode: 'light',
  isLoading: false,
  toggleTheme: () => {},
});

export const AppProvider = (props: any) => {
  const [user, setUser] = useState<User>();
  const [themeMode, setThemMode] = useState<'dark' | 'light'>('light');
  const {isToggle, toggle} = useToggle(true);

  const {colorMode, toggleColorMode} = useColorMode();

  const appInit = async () => {
    const [theme, token] = await AsyncStorage.multiGet([THEME_MODE, TOKEN]);

    if (!!token) {
      await getMe();
    }

    SplashScreen.hide();
    console.log('AppProvider', theme, token);
  };

  const getMe = async () => {};

  const toggleTheme = async () => {
    toggleColorMode();

    console.log('TOGGLE THEME');

    try {
      let value = colorMode === 'dark' ? 'light' : 'dark';
      await AsyncStorage.setItem(THEME_MODE, value);
    } catch (error) {
      console.log('AppProvider', 'toggle theme error');
    }
  };

  useEffect(() => {
    appInit();
  }, []);
  return (
    <AppContext.Provider
      value={{user: user, themeMode, isLoading: isToggle, toggleTheme}}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
