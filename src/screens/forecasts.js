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
  textPrevisoes: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23,
    left: 20,
  },
  textDescricao: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    left: 20,
  },
  imgGraph: {
    width: 284,
    height: 179,
    alignSelf: 'center',
  },
});

export default function Forecasts({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} />

      <Text style={styles.textPrevisoes}>Previsões</Text>
      <Space />
      <Text style={styles.textDescricao}>
        - Deverá ter cuidado com os piolhos e usar durante todo o ano um produto
        para prevenir piolhos, dada a alta incidência. - A caspa irá, muito
        provavelmente, reincidir no Inverno.
      </Text>
      <Space />
      <Image
        style={styles.imgGraph}
        source={require('../Imagens/graphForecasts.png')}
      />
      <Space />
      <Space />
      <Space />
    </SafeAreaView>
  );
}
