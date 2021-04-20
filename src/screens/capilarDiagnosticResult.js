import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Headerr from '../components/header';
import Space from '../components/space';
import useUserInfo from '../hooks/useUserInfo';
import useDiagnostic from '../hooks/useDiagnostic';

const capilarDiagnosticResult = ({navigation}) => {
  const [getUsername, name] = useUserInfo();
  const [getDiagnostic, disease, solution, date] = useDiagnostic();

  useEffect(() => {
    getUsername();
    getDiagnostic();
  }, []);

  return (
    <View style={styles.container}>
      <Headerr navigation={navigation} name={name} />
      <View style={styles.view}>
        <Text style={styles.textResultado}>Resultado</Text>
        <Space />
        <View style={styles.viewGrey}>
          <Text style={styles.textProblem}>Problemas:</Text>
        </View>
        <Space />
        <Text style={styles.textProblemR}>
          {'- '}
          {disease}
        </Text>

        <Space />
        <View style={styles.viewGrey}>
          <Text style={styles.textSoluc}>Soluções:</Text>
        </View>
        <Space />
        <View style={styles.viewTextProblem}>
          <Text style={styles.textSolucR}>
            {'- '}
            {solution}
          </Text>
        </View>
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //justifyContent: 'flex-start',
    alignContent: 'flex-start',
    //flexDirection: 'column',
    backgroundColor: '#fff',
    //backgroundColor: 'blue',
  },
  view: {
    //backgroundColor:'pink',
    flex: 2,
  },
  textResultado: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    left: 20,
  },

  textProblem: {
    textAlignVertical: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    left: 20,
  },
  textProblemR: {
    textAlignVertical: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    left: 20,
  },
  textSoluc: {
    textAlignVertical: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    left: 20,
  },
  textSolucR: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    textAlignVertical: 'center',
    left: 20,
  },
  viewGrey: {
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
    height: 40,
  },
  viewTextProblem: {
    justifyContent: 'center',
    borderColor: 'red',
    borderRadius: 5,
    width: '95%',
    height: 72,
    bottom: 15,
  },
});

export default capilarDiagnosticResult;
