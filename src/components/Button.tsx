import {iDarkColor} from '@share/layout';
import {Button, Text} from 'native-base';
import {IButtonProps} from 'native-base/lib/typescript/components/primitives/Button/types';
import React, {FC} from 'react';

interface Props {
  label: string;
  type?: 'primary' | 'outline' | 'ghost' | 'link' | 'image';
}

export const IButton: FC<Props & IButtonProps> = ({label, type, ...props}) => {
  if (type === 'image') {
  }

  return (
    <Button
      shadow={3}
      borderRadius="lg"
      _dark={{
        backgroundColor: iDarkColor.primary,
        padding: '12px',
      }}
      _light={{
        backgroundColor: iDarkColor.primary,
        padding: '12px',
      }}
      _text={{
        color: 'lightText',
      }}
      {...props}>
      <Text color="lightText">{label.toLocaleUpperCase()}</Text>
    </Button>
  );
};
