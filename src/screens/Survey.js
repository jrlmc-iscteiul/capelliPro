import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import SurveyForm from '../components/SurveyForm';
import {NavigationEvents} from 'react-navigation';

const Survey = ({navigation}) => {
  const {state, sendSurvey, clearErrorMessage} = useContext(AuthContext);
  console.log('state: ' + state);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../Imagens/marble.jpg')}>
        <Image
          style={styles.menuIcon}
          source={require('../Imagens/menuIcon.png')}
        />
        <Text style={styles.text}>Inquérito Inicial</Text>
        <Text style={styles.subText}>Vamos começar!</Text>
      </ImageBackground>

      <ScrollView>
        <View style={styles.view}>
          <Spacer />

          <NavigationEvents onWillFocus={clearErrorMessage} />

          <SurveyForm
            errorMessage={state.errorMessage}
            submitButtonText="Pronto"
            onSubmit={sendSurvey}
          />
        </View>
        <Spacer />
      </ScrollView>
    </SafeAreaView>
  );
};

Survey.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    alignContent: 'flex-start',
    width: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: 100,
    width: '100%',
    backgroundColor: 'blue',
  },
  scroll: {
    backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'center',
  },
  subText: {
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  questionsText: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#d3d3d3',
    paddingLeft: 10,
  },
  menuIcon: {
    width: 27,
    height: 27,
    left: 10,
  },
  button: {
    width: 273,
    height: 54,
    borderRadius: 4,
  },
});

export default Survey;
