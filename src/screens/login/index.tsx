import {AssetIcons} from '@assets';
import {AppLogo, IButton, IContainer, IInput, ILink} from '@components';
import {SelectLanguage} from '@components/Select';
import {yupResolver} from '@hookform/resolvers/yup';
import {useToggle} from '@hooks';
import {LoginParams} from '@models';
import {jsUcfirst} from '@utils';
import i18next from 'i18next';
import {
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useColorMode,
  VStack,
} from 'native-base';
import React, {FC, useContext} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as yup from 'yup';
import {
  darkLinearColors,
  iDarkColor,
  lightLinearColors,
} from '../../share/layout';
import {LoginContext, LoginProvider} from './login-context';

interface Props {}

const LoginUI: FC<Props> = () => {
  const {t} = useTranslation();
  const {onSignIn, onTapForgotPassword, onTapRegisterScreen} =
    useContext(LoginContext);
  const {toggle, isToggle} = useToggle();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('validation.incorrectEmail'))
      .required(t('validation.requireEmail')),
    password: yup
      .string()
      .min(6, t('validation.incorrectPassword'))
      .required(t('validation.requirePassword')),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
  });

  const getBg = (isDark: boolean) => ({
    colors: isDark ? darkLinearColors : lightLinearColors,
    start: [0, 0],
    end: [1, 1],
  });

  return (
    <IContainer useLinear={true}>
      <HStack justifyContent="space-between" alignItems="center" padding={'4'}>
        <SelectLanguage
          value={i18next.language}
          onChange={i18next.changeLanguage}
        />
        <ToggleTheme />
      </HStack>

      <AppLogo />

      <VStack alignItems="center" marginTop="4">
        <Heading size="lg">{t('welcome')}</Heading>
        <Heading mt="1" fontWeight="medium" size="xs">
          {t('singInContinue')}
        </Heading>
      </VStack>

      <VStack flex={1} justifyContent="space-between">
        <VStack space={4} marginRight="4" marginLeft="4" marginTop="1">
          <IInput
            control={control}
            name="email"
            placeholder={t('placeholderEmail')}
            label={'Email'}
            errorMessage={errors?.email?.message}
          />

          <IInput
            control={control}
            name="password"
            placeholder={t('placeholderPassword')}
            label={jsUcfirst(t('password'))}
            errorMessage={errors?.password?.message}
            type={isToggle ? 'password' : 'text'}
            onToggleShowPass={toggle}
            isSecurity={true}
            isShowPass={isToggle}
          />
          <ILink alignSelf="flex-end" onPress={onTapForgotPassword}>
            {t('forgotPassword')}
          </ILink>

          <IButton label={t('signIn')} onPress={handleSubmit(onSignIn)} />
        </VStack>

        <VStack space={2}>
          <HStack justifyContent="center">
            <Text textAlign="center">{t('donAccount')} </Text>
            <ILink onPress={onTapRegisterScreen}>{t('createAccount')}</ILink>
          </HStack>

          <HStack
            flex={1}
            alignItems="center"
            space={4}
            width="80%"
            alignSelf="center">
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
      </VStack>

      <VStack alignItems="center" justifyContent={'flex-end'}>
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

export const LoginScreen = (props: any) => (
  <LoginProvider {...props}>
    <LoginUI {...props} />
  </LoginProvider>
);

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
