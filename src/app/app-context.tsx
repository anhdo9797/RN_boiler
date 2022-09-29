import {THEME_MODE, TOKEN} from '@configs';
import {useToggle} from '@hooks';
import {User} from '@models';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    const [theme, token] = await Promise.all([
      AsyncStorage.getItem(THEME_MODE),
      AsyncStorage.getItem(TOKEN),
    ]);

    if (theme !== colorMode) {
      toggleColorMode();
    }

    if (!!token) {
      await getMe();
    }
    setThemMode(prev => (theme === 'dark' ? 'dark' : 'light'));
    SplashScreen.hide();
  };

  const getMe = async () => {};

  const toggleTheme = async () => {
    toggleColorMode();

    console.log('TOGGLE THEME');

    try {
      let value = themeMode === 'dark' ? 'light' : 'dark';
      console.log('value', value);

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
