import {Box, Image, Select} from 'native-base';
import React, {FC} from 'react';
import {FlagsAssets} from '../assets';

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
      value="vn"
      rightIcon={
        <Box flex={1} alignItems="flex-end">
          <Image
            size={10}
            width="16"
            borderRadius={10}
            source={FlagsAssets.vi}
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
            source={FlagsAssets.en}
            alt="en"
          />
        </Box>
      }
    />
  </Select>
);