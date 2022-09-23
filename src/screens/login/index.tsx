import {AssetIcons} from '@assets';
import {AppLogo, IButton, IContainer, IInput, ILink} from '@components';
import {SelectLanguage} from '@components/Select';
import i18next from 'i18next';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useColorMode,
  VStack,
} from 'native-base';
import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  darkLinearColors,
  iDarkColor,
  lightLinearColors,
} from '../../share/layout';

interface Props {}

const ToggleTheme = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  const iconType = isDark ? MaterialIcons : Entypo;
  const name = isDark ? 'nightlight-round' : 'light-up';

  return (
    <IconButton
      onPress={toggleColorMode}
      color={'lightText'}
      _icon={{
        as: iconType,
        name: name,
        color: isDark ? 'lightText' : 'darkText',
      }}
    />
  );
};

export const LoginScreen: FC<Props> = () => {
  const {t} = useTranslation();
  const getBg = (isDark: boolean) => ({
    colors: isDark ? darkLinearColors : lightLinearColors,
    start: [0, 0],
    end: [1, 1],
  });
  const [isShowPass, setIsShowPass] = useState(false);

  const onTapRegister = () => {
    // more code
  };
  const forgotPassword = () => {
    // more code
  };

  return (
    <IContainer
      _dark={{
        bg: {linearGradient: getBg(true)},
      }}
      _light={{
        bg: {linearGradient: getBg(false)},
      }}>
      <HStack justifyContent="space-between">
        <SelectLanguage
          value="vn"
          onChange={(name: string) => i18next.changeLanguage(name)}
        />
        <ToggleTheme />
      </HStack>

      <AppLogo />

      <VStack alignItems="center" marginTop="4">
        <Heading size="lg">{t('welcome')}</Heading>
        <Heading mt="1" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
      </VStack>

      <VStack space={4} mt="5">
        <IInput label="Email" placeholder="Enter email" />
        <IInput
          label={t('password')}
          placeholder={t('placeholderPassword')}
          type={isShowPass ? 'password' : 'text'}
          InputRightElement={
            <Pressable onPress={() => setIsShowPass(!isShowPass)}>
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
          }
        />

        <ILink alignSelf="flex-end" onPress={forgotPassword}>
          {t('forgotPassword')}
        </ILink>

        <IButton label={t('signIn')} />

        <HStack justifyContent="center">
          <Text textAlign="center">{t('donAccount')}</Text>
          <ILink onPress={onTapRegister}>{t('createAccount')}</ILink>
        </HStack>

        <HStack flex={1} alignItems="center" space={4}>
          <Divider flex={1} />
          <Text alignSelf={'center'}>{t('or')}</Text>
          <Divider flex={1} />
        </HStack>

        <HStack justifyContent="center">
          <Button variant="ghost" margin="2">
            <Image source={AssetIcons.fb} size="8" alt="facebook" />
          </Button>

          <Button variant="ghost" margin="2">
            <Image source={AssetIcons.google} size="8" alt="google" />
          </Button>
        </HStack>
      </VStack>

      <VStack alignItems="center" justifyContent={'flex-end'} flex={1}>
        <Text bold color={iDarkColor.primary} fontSize="xs">
          ReactNative Boiler
        </Text>
        <Text italic fontSize="xs">
          Version:{' '}
          <Text bold color={iDarkColor.primary}>
            1.0.0
          </Text>
        </Text>
      </VStack>
    </IContainer>
  );
};
