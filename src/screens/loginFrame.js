import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Platform,
} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const LoginFrame = () => {
  const {state, signin, clearErrorMessage} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.titleText}>Bem-vindo a bordo!</Text>

        <Spacer />

        <Image
          style={styles.image}
          source={require('../Imagens/imgLogin.png')}
        />

        <NavigationEvents onWillFocus={clearErrorMessage} />

        <AuthForm
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Iniciar Sessão"
        />

        <View style={styles.passwordTextContainer}>
          <Text style={styles.passwordText}>Esqueceu-se da password?</Text>
        </View>

        <NavLink
          routeName="Signup"
          text="Ainda não tem uma conta? "
          text2="Registe-se"
        />

        <Text style={styles.text}> Ou iniciar sessão com: </Text>

        <Image
          style={styles.image2}
          source={require('../Imagens/googleLogo.png')}
        />
      </View>
    </SafeAreaView>
  );
};

LoginFrame.navigationOptions = {
  header: () => false,
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
    //backgroundColor: 'pink',
    alignItems: 'center',
    width: '75%',
    height: '85%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
  passwordTextContainer: {
    //backgroundColor: 'pink',
    width: '100%',
    height: 20,
  },
  passwordText: {
    fontSize: 16,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: 274,
    height: 50,
    borderRadius: 4,
  },
  inputText: {
    width: 274,
    height: 50,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
  },
  image: {
    width: 106,
    height: 79,
    //position: 'absolute',
  },
  image2: {
    width: 40,
    height: 40,
    //position: 'absolute',
  },
});

export default LoginFrame;
