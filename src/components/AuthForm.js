import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {View} from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Spacer />
      <Input
        style={styles.inputText}
        label="Email"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Introduza o seu email"
      />

      <Input
        style={styles.inputText}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Introduza a sua password"
      />

      <View style={styles.buttonContainer}>
        <Button
          // eslint-disable-next-line react-native/no-inline-styles
          buttonStyle={{backgroundColor: '#5A5757'}}
          title={submitButtonText}
          onPress={() => onSubmit({username, password})}
        />
      </View>

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  inputText: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 4,
  },
  buttonContainer: {
    width: '95%',
    height: 50,
    borderRadius: 4,
  },
});

export default AuthForm;
