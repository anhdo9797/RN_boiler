import {darkLinearColors, lightLinearColors} from '@share/layout';
import {Box, KeyboardAvoidingView} from 'native-base';
import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import React, {FC} from 'react';
import {Platform, SafeAreaView, ScrollView} from 'react-native';

interface IContainerProps {
  noneSafe?: boolean;
  useLinear?: boolean;
}

export const IContainer: FC<InterfaceBoxProps & IContainerProps> = ({
  noneSafe,
  useLinear,
  ...props
}) => {
  const getBg = (isDark: boolean) => ({
    colors: isDark ? darkLinearColors : lightLinearColors,
    start: [0, 0],
    end: [1, 1],
  });

  return (
    <Box
      flex={1}
      _dark={{
        backgroundColor: 'black',
        bg: !!useLinear ? {linearGradient: getBg(true)} : {},
      }}
      _light={{
        backgroundColor: 'white',
        bg: !!useLinear ? {linearGradient: getBg(false)} : {},
      }}
      _text={{
        _light: {
          color: 'lightText',
        },
        _dark: {
          color: 'darkText',
        },
      }}
      {...props}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            {props.children}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};
