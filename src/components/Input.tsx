import {iDarkColor} from '@share/layout';
import {FormControl, Icon, Input, Pressable} from 'native-base';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';
import React, {FC} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface Props {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  onToggleShowPass?: () => void;
  isShowPass?: boolean;
  isSecurity?: boolean;
}

export const IInput: FC<IInputProps & Props> = ({
  label,
  placeholder,
  errorMessage,
  onChangeText,
  isShowPass,
  onToggleShowPass,
  isSecurity,
  ...props
}) => {
  const renderInputRightElement = () =>
    isSecurity ? (
      <Pressable onPress={onToggleShowPass}>
        <Icon
          marginRight="2"
          as={
            <MaterialIcons
              name={isShowPass ? 'visibility-off' : 'visibility'}
            />
          }
          size={5}
          ml="2"
          color="muted.400"
        />
      </Pressable>
    ) : (
      props.InputRightElement
    );
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
        type={placeholder}
        onChangeText={onChangeText}
        borderRadius="lg"
        shadow={2}
        InputRightElement={renderInputRightElement()}
        _dark={{
          backgroundColor: iDarkColor.background200,
          borderColor: iDarkColor.background400,
        }}
        // _light={{
        //   backgroundColor: '#93aab6',
        // }}
        {...props}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
