import AsyncStorage from '@react-native-async-storage/async-storage';
import {LANGUAGE_KEY} from '@share/constance';
import {LanguageDetectorAsyncModule} from 'i18next';

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      //get stored language from Async storage
      await AsyncStorage.getItem(LANGUAGE_KEY).then(language => {
        if (language) {
          //if language was stored before, use this language in the app
          return callback(language);
        } else {
          //if language was not stored yet, use default language
          return 'en';
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

export default languageDetectorPlugin;
