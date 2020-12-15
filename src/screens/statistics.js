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
  textStats: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23,
    left: 20,
  },
  textNum: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    left: 20,
  },
  imgGraph: {
    width: 225,
    height: 256,
    alignSelf: 'center',
  },
});

export default function Statistics({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} />

      <Text style={styles.textStats}>Estatísticas</Text>
      <Space />
      <Text style={styles.textNum}>Número de diagnósticos num ano: 8</Text>
      <Space />
      <Image style={styles.imgGraph} source={require('../Imagens/graph.png')} />
      <Space />
      <Space />
      <Space />
    </SafeAreaView>
  );
}
