import {RegisterPrams} from '@models';
import React, {createContext} from 'react';
interface RegisterProps {
  onRegister: (param: RegisterPrams) => void;
}
const defaultProps = {
  onRegister: () => {},
};

export const RegisterContext = createContext<RegisterProps>(defaultProps);

export const RegisterProvider = (props: any) => {
  const onRegister = (param: RegisterPrams) => {
    // fetch api
  };
  return (
    <RegisterContext.Provider value={{onRegister}}>
      {props.children}
    </RegisterContext.Provider>
  );
};
