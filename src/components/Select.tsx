import {AssetIcons} from '@assets';
import {
  Actionsheet,
  HStack,
  Image,
  Pressable,
  Text,
  useDisclose,
} from 'native-base';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Image as RNImage} from 'react-native';

interface SelectLanguageProps {
  value: string;
  onChange: (value: string) => void;
}

export const SelectLanguage: FC<SelectLanguageProps> = ({value, onChange}) => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const {t} = useTranslation();

  const renderFlag = (flag: any, alt: string) => (
    <Image
      source={flag}
      width="30px"
      height="20px"
      marginRight="12px"
      borderRadius={4}
      alt={alt}
    />
  );
  const onSelectLang = (lang: string) => {
    onClose();
    onChange(lang);
  };

  const ic = value === 'vi' ? AssetIcons.vi : AssetIcons.en;

  return (
    <>
      <Pressable onPress={onOpen}>
        <RNImage source={ic} style={{width: 30, height: 20, borderRadius: 4}} />
      </Pressable>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Text>{t('selectLang')}</Text>
          <Actionsheet.Item onPress={() => onSelectLang('en')}>
            <HStack alignContent="center">
              {renderFlag(AssetIcons.en, 'en')}
              <Text>English</Text>
            </HStack>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={() => onSelectLang('vi')}>
            <HStack>
              {renderFlag(AssetIcons.vi, 'vi')}
              <Text>Tiếng Việt</Text>
            </HStack>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
