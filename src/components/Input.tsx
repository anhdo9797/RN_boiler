import {iDarkColor, SPACER} from '@share/layout';
import {FormControl, Icon, Input, Pressable} from 'native-base';
import {IInputProps} from 'native-base/lib/typescript/components/primitives/Input/types';
import React, {FC} from 'react';
import {Control, Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface Props {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  onChangeText?: (value: string) => void;
  onToggleShowPass?: () => void;
  isShowPass?: boolean;
  isSecurity?: boolean;
  control?: Control<any>;
  name?: string;
}

export const IInput: FC<IInputProps & Props> = ({
  label,
  placeholder,
  errorMessage,
  control,
  isShowPass,
  onToggleShowPass,
  isSecurity,
  name,
  ...props
}) => {
  const renderInputRightElement = () =>
    isSecurity ? (
      <Pressable onPress={onToggleShowPass}>
        <Icon
          marginRight="2"
          as={
            <MaterialIcons
              name={!isShowPass ? 'visibility-off' : 'visibility'}
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
        <FormControl.Label fontWeight={'bold'}>{label}</FormControl.Label>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            variant="filled"
            padding={SPACER.l}
            type={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            borderRadius="lg"
            value={value}
            shadow={1}
            InputRightElement={renderInputRightElement()}
            _dark={{
              backgroundColor: iDarkColor.background200,
              borderColor: iDarkColor.background400,
            }}
            _light={{
              backgroundColor: 'white',
              borderColor: 'white',
            }}
            {...props}
          />
        )}
        name={name ?? 'TextInput'}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
