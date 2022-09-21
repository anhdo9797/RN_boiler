import {HStack, IconButton, useColorMode} from 'native-base';
import React, {FC} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {darkLinearColors, lightLinearColors} from '../../share/layout';

import Logo from '@assets/images/logo.svg';
import {IContainer} from '@components';
import {useWindowDimensions} from 'react-native';

interface Props {}

const ToggleTheme = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  const iconType = isDark ? MaterialIcons : Entypo;
  const name = isDark ? 'nightlight-round' : 'light-up';

  return (
    <IconButton
      onPress={toggleColorMode}
      color={'lightText'}
      _icon={{
        as: iconType,
        name: name,
        color: isDark ? 'lightText' : 'darkText',
      }}
    />
  );
};

export const LoginScreen: FC<Props> = () => {
  const getBg = (isDark: boolean) => ({
    colors: isDark ? darkLinearColors : lightLinearColors,
    start: [0, 0],
    end: [1, 1],
  });
  const {height} = useWindowDimensions();
  return (
    <IContainer
      _dark={{
        bg: {linearGradient: getBg(true)},
      }}
      _light={{
        bg: {linearGradient: getBg(false)},
      }}>
      <HStack justifyContent="flex-end">
        <ToggleTheme />
      </HStack>

      <HStack justifyContent="center">
        <Logo height={height / 4} />
      </HStack>
    </IContainer>
  );
};
