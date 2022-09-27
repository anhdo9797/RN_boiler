import {LoginParams} from '@models';
import {APP_SCREEN, navigate} from '@navigation';
import React, {createContext} from 'react';

interface LoginState {
  onSignIn: (param: LoginParams) => void;
  onTapRegisterScreen: () => void;
  onTapForgotPassword: () => void;
}

const defaultValue = {
  onSignIn: () => {},
  onTapRegisterScreen: () => {},
  onTapForgotPassword: () => {},
};

export const LoginContext = createContext<LoginState>(defaultValue);

export function LoginProvider(props: any) {
  const onSignIn = (param: LoginParams) => {};
  const onTapRegisterScreen = () => navigate(APP_SCREEN.REGISTER);
  const onTapForgotPassword = () => navigate(APP_SCREEN.RESET_PASSWORD);

  return (
    <LoginContext.Provider
      value={{
        onSignIn,
        onTapRegisterScreen,
        onTapForgotPassword,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
}
