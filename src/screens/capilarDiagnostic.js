import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Headerr from '../components/header';
import Space from '../components/space';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textPF: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    alignSelf: 'center',
  },
  buttonDC: {
    width: 200,
    height: 54,
    borderRadius: 4,
  },
  img: {
    alignSelf: 'center',
    width: 210,
    height: 180,
  },
});

export default function capilarDiagnostic({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} />

      <Image style={styles.img} source={require('../Imagens/Img5.png')} />
      <Space />
      <Space />

      <Button
        style={styles.buttonDC}
        color="#5A5757"
        title="Diagnóstico Capilar"
        onPress={() => navigation.navigate('Resultado')}
      />
      <Space />
      <Text style={styles.textPF}>Por favor, ligue o seu analisador.</Text>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
    </SafeAreaView>
  );
}
