import LogoAssets from '@assets/images/logo.svg';
import LogoDarkAssets from '@assets/images/logo-dark.svg';
import {Center, useColorMode} from 'native-base';
import React, {FC} from 'react';
import {useWindowDimensions} from 'react-native';

interface Props {
  h?: number;
  w?: number;
}

export const AppLogo: FC<Props> = ({h, w}) => {
  const {colorMode} = useColorMode();
  const {height} = useWindowDimensions();
  let heightAssets = h ?? height / 6;

  if (colorMode === 'dark') {
    return (
      <Center>
        <LogoAssets height={heightAssets} />
      </Center>
    );
  }

  return (
    <Center>
      <LogoDarkAssets height={heightAssets} />
    </Center>
  );
};
