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

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
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
import { Provider as AuthProvider } from '../context/AuthContext';
import { setNavigator } from '../navigationRef';



const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    getStarted: GetStarted,
    Signup: RegisterFrame,
    Signin: LoginFrame,
    Survey: Survey
  }),
  mainFlow: createDrawerNavigator({
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
      screen: Settings
    },
    
  },{
    contentComponent: CustomDrawerContent,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  );
};

/* function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerItem
        icon={() => (
          <Icon icon='eye' solid color="blue" size={32} />)}
        label="Diagnóstico"
        onPress={() => props.navigation.navigate('Diagnostico')}
      />
      <DrawerItem
        icon={() => (
          <Icon icon='eye' solid color="blue" size={32} />)}
        label="Estatísticas"
        onPress={() => props.navigation.navigate('Estatisticas')}
      />
      <DrawerItem
        icon={() => (
          <Icon icon='eye' solid color="blue" size={32} />)}
        label="Previsões"
        onPress={() => props.navigation.navigate('Previsoes')}
      />
      <DrawerItem
        icon={() => (
          <Icon icon='eye' solid color="blue" size={32} />)}
        label="Perfil"
        onPress={() => props.navigation.navigate('Perfil')}
      />
      <DrawerItem
        icon={() => (
          <Icon icon='eye' solid color="blue" size={32} />)}
        label="Configurações"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Registo" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Diagnostico" component={CapilarDiagnostic} />
      <Drawer.Screen name="Estatisticas" component={Statistics} />
      <Drawer.Screen name="Previsoes" component={Forecasts} />
      <Drawer.Screen name="Perfil" component={Dashboard} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Resultado" component={CapilarDiagnosticResult} />
    </Drawer.Navigator>
  )
}

const Drawer = () => {
  return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
  )
}; */
