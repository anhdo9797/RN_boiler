import {Box} from 'native-base';
import {InterfaceBoxProps} from 'native-base/lib/typescript/components/primitives/Box';
import React, {FC} from 'react';

export const IContainer: FC<InterfaceBoxProps> = props => {
  return (
    <Box
      flex={1}
      padding="4"
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
      {...props}
    />
  );
};
