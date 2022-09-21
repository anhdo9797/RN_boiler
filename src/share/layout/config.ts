import type {ColorMode, StorageManager} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {THEME_MODE} from '../constance';

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem(THEME_MODE);
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      console.log(e);
      return 'light';
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem(THEME_MODE, value ?? '');
    } catch (e) {
      console.log(e);
    }
  },
};

export const themConfig = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
