module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          src: './src',
          '@components': './src/components',
          '@assets': './src/assets',
          '@share': './src/share',
          '@services': './src/services',
          '@model': './src/model',
          '@configs': './src/configs',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
