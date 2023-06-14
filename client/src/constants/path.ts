import { LoginPage } from 'pages/LoginPage/LoginPage';
import React from 'react';

export enum EPath {
  LOGIN_PAGE = '/login',
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
];
