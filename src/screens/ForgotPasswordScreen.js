import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from '../components/Spacer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.titleText}> Esqueceu-se da pasword? </Text>

        <Spacer />

        <Input
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Introduza o seu email"
        />

        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={{backgroundColor: '#5A5757'}}
            title="Enviar email"
            onPress={() => console.log('enviar email')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

ForgotPassword.navigationOptions = {
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
    alignItems: 'center',
    width: '75%',
    height: '85%',
    flexDirection: 'column',
  },
  inputText: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '95%',
    height: 50,
    borderRadius: 4,
  },
});

export default ForgotPassword;
