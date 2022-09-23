import {AssetIcons} from '@assets';
import {Box, Image, Select} from 'native-base';
import React, {FC} from 'react';

interface SelectLanguageProps {
  value: string;
  onChange: (value: string) => void;
}

export const SelectLanguage: FC<SelectLanguageProps> = ({value, onChange}) => (
  <Select
    mt={1}
    onValueChange={onChange}
    justifyContent="space-between"
    alignItems={'center'}
    alignContent="center"
    selectedValue={value}
    _selectedItem={{
      backgroundColor: 'dark.100',
    }}>
    <Select.Item
      label="Vietnamese"
      value="vi"
      rightIcon={
        <Box flex={1} alignItems="flex-end">
          <Image
            size={10}
            width="16"
            borderRadius={10}
            source={AssetIcons.vi}
            alt="vi"
          />
        </Box>
      }
    />

    <Select.Item
      label="English"
      value="en"
      rightIcon={
        <Box flex={1} alignItems="flex-end">
          <Image
            size={10}
            width="16"
            borderRadius={10}
            source={AssetIcons.en}
            alt="en"
          />
        </Box>
      }
    />
  </Select>
);
