/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {createDrawerNavigator} from 'react-navigation-drawer';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import { createBottomTabNavigator } from 'react-navigation-tabs';

import ResolveAuthScreen from '../screens/ResolveAuthScreen';

import CustomDrawerContent from '../components/customDrawerContent';

import CapilarDiagnostic from './capilarDiagnostic';
import Dashboard from './dashboard';
import Forecasts from './forecasts';
import GetStarted from './getStartedFrame';
import Statistics from './statistics';
import RegisterFrame from './registerFrame';
import LoginFrame from './loginFrame';
import Survey from './Survey';
import Settings from './settings';
import CapilarDiagnosticResult from './capilarDiagnosticResult';

import {Provider as AuthProvider} from '../context/AuthContext';
import {setNavigator} from '../navigationRef';

const switchNavigator = createSwitchNavigator({
   ResolveAuth: ResolveAuthScreen,

  loginFlow: createStackNavigator({
    getStarted: GetStarted,
    Signup: RegisterFrame,
    Signin: LoginFrame,
    Survey: Survey,
  }), 

  mainFlow: createDrawerNavigator(
    {
      Perfil: {
        screen: Dashboard,
      },
      Diagnostico: {
        screen: CapilarDiagnostic,
      },
      Estatisticas: {
        screen: Statistics,
      },
      Previsoes: {
        screen: Forecasts,
      },
      Configuracoes: {
        screen: Settings,
      },
      Resultado: {
        screen: CapilarDiagnosticResult,
      },
    },
    {
      contentComponent: CustomDrawerContent,
    },
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => {
          setNavigator(navigator);
        }}
      />
    </AuthProvider>
  );
};
