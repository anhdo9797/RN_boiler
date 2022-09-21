import {HStack, Button, Text} from 'native-base';
import React, {FC} from 'react';

interface ButtonGroupType {
  label: string;
  action: () => void;
  key: string;
}

interface Props {
  borderRadius?: number;
  buttons: ButtonGroupType[];
  value: string;
}

const ButtonGroup: FC<Props> = ({buttons, value}) => {
  return (
    <HStack borderColor={'black'} borderWidth="0.5" borderRadius={'4'}>
      {buttons.map((button: ButtonGroupType) => {
        const isSelected = value === button.key;

        return (
          <Button
            flex={1}
            onPress={button.action}
            key={button.key}
            colorScheme="darkBlue"
            variant={isSelected ? 'solid' : 'ghost'}>
            <Text color={!isSelected ? 'darkText' : 'lightText'}>
              {button.label}
            </Text>
          </Button>
        );
      })}
    </HStack>
  );
};
export default ButtonGroup;
