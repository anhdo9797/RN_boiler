import {AppLogo, IButton, IContainer, IInput, ILink} from '@components';
import React, {FC, useContext} from 'react';
import {RegisterProvider, RegisterContext} from '@screens';
import {Heading, HStack, Spacer, Text, VStack} from 'native-base';
import {SelectLanguage} from '@components/Select';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {jsUcfirst} from '@utils';
import {RegisterPrams} from '@models';
import {useToggle} from '@hooks';
import {goBack} from '@navigation';

export const RegisterScreen = (props: any) => (
  <RegisterProvider {...props}>
    <Register {...props} />
  </RegisterProvider>
);

const Register: FC<{}> = () => {
  const {t} = useTranslation();
  const {isToggle, toggle} = useToggle(true);
  const {onRegister} = useContext(RegisterContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t('validation.incorrectEmail'))
      .required(t('validation.requireEmail')),
    password: yup
      .string()
      .min(6, t('validation.incorrectPassword'))
      .required(t('validation.requirePassword')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('validation.passwordNotMatch')),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterPrams>({
    resolver: yupResolver(schema),
  });

  return (
    <IContainer useLinear={true}>
      <HStack justifyContent="space-between" alignItems="center" padding={'4'}>
        <SelectLanguage
          value={i18next.language}
          onChange={i18next.changeLanguage}
        />
      </HStack>

      <AppLogo />

      <VStack alignItems="center" marginTop="4">
        <Heading size="lg">{t('register')}</Heading>
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
          <IInput
            control={control}
            name="confirmPassword"
            placeholder={t('confirmPassword')}
            label={jsUcfirst(t('confirmPassword'))}
            errorMessage={errors?.confirmPassword?.message}
            type={isToggle ? 'password' : 'text'}
            onToggleShowPass={toggle}
            isSecurity={true}
            isShowPass={isToggle}
          />
          <Spacer />
          <IButton label={t('register')} onPress={handleSubmit(onRegister)} />
        </VStack>

        <VStack space={2}>
          <HStack justifyContent="center">
            <Text textAlign="center">{t('hasAccount')} </Text>
            <ILink onPress={goBack}>{t('signIn').toLowerCase()}</ILink>
          </HStack>
        </VStack>
      </VStack>
    </IContainer>
  );
};
