import {iDarkColor} from '@share/layout';
import {FormControl, Input} from 'native-base';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';
import React, {FC} from 'react';

interface Props {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
}

export const IInput: FC<IInputProps & Props> = ({
  label,
  placeholder,
  errorMessage,
  onChangeText,
  ...props
}) => {
  return (
    <FormControl isInvalid={!!errorMessage}>
      {label && (
        <FormControl.Label
          fontWeight={'bold'}
          _dark={{color: 'darkText'}}
          _light={{color: 'lightText'}}>
          {label}
        </FormControl.Label>
      )}

      <Input
        variant="filled"
        backgroundColor={'red.300'}
        type={placeholder}
        onChangeText={onChangeText}
        borderRadius="lg"
        shadow={2}
        _dark={{
          backgroundColor: iDarkColor.background400,
          borderColor: iDarkColor.background600,
        }}
        _light={{
          backgroundColor: '#93aab6',
        }}
        {...props}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
