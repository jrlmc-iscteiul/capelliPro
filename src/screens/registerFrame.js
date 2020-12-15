/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {Text, Input} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';

/*
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/

const RegisterFrame = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  console.log(state);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Bem-vindo a bordo!</Text>

        <Spacer />

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text1}>
          Por favor introduza as suas informações pessoais
        </Text>

        <Spacer />

        <Input
          style={styles.inputText}
          label="Nome"
          placeholder="Introduza o seu nome completo"
        />

        <Input
          style={styles.inputText}
          label="Password"
          placeholder="Confirme a sua password"
        />

        <NavigationEvents onWillFocus={clearErrorMessage} />

        <AuthForm
          errorMessage={state.errorMessage}
          submitButtonText="Registar"
          onSubmit={signup}
        />

        <NavLink
          routeName="Signin"
          text="Já tem uma conta? "
          text2="Iniciar Sessão"
        />
      </View>
    </SafeAreaView>
  );
};

RegisterFrame.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  view: {
    //backgroundColor:'pink',
    alignItems: 'center',
    width: '75%',
    height: '85%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  text1: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
  inputText: {
    width: 274,
    height: 50,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
  },
});


export default RegisterFrame;
