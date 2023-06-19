import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import React from 'react';

export enum EPath {
  LOGIN_PAGE = '/login',
  REGISTRATION_PAGE = '/register',
}

type TPath = {
  path: string;
  element: () => React.ReactElement;
};

export const routes: TPath[] = [
  {
    path: EPath.LOGIN_PAGE,
    element: LoginPage,
  },
  {
    path: EPath.REGISTRATION_PAGE,
    element: RegistrationPage,
  },
];
