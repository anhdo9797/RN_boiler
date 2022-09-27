/* eslint-disable @typescript-eslint/no-explicit-any */
import {createRef} from 'react';

import {RootStackParamList} from '@navigation/screen-types';
import {CommonActions, NavigationContainerRef} from '@react-navigation/native';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName],
) {
  navigationRef.current?.navigate(name as any, params);
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack);
}
