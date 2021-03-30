import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {View} from 'react-native';

const AuthFormRegister = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Input
        style={styles.inputText}
        label="Nome"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Introduza o seu nome completo"
      />

      <Input
        style={styles.inputText}
        label="Email"
        value={email}
        onChangeText={setEmail}
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

      {password.length < 6 ? (
        <Text>A password deve ter pelo menos 6 caracteres. </Text>
      ) : null}

      <Input
        style={styles.inputText}
        secureTextEntry
        label="Password"
        placeholder="Confirme a sua password"
      />

      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={{backgroundColor: '#5A5757'}}
          title={submitButtonText}
          onPress={() => onSubmit({name, email, password})}
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

export default AuthFormRegister;
