import {Box, KeyboardAvoidingView} from 'native-base';
import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import React, {FC} from 'react';
import {Platform, ScrollView} from 'react-native';

export const IContainer: FC<InterfaceBoxProps> = props => {
  return (
    <Box
      flex={1}
      // padding="4"
      _dark={{
        backgroundColor: 'black',
      }}
      _light={{
        backgroundColor: 'white',
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
    </Box>
  );
};
