import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Headerr from '../components/header';
import Space from '../components/space';
import useUserInfo from '../hooks/useUserInfo';
import useDiagnostic from '../hooks/useDiagnostic';

const Dashboard = ({navigation}) => {
  const [getUsername, name] = useUserInfo();
  const [getDiagnostic, disease, solution, date] = useDiagnostic();

  useEffect(() => {
    getUsername();
    getDiagnostic();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} name={name} />
      <Space />
      <Text style={styles.textOS}>O seu último diagnóstico foi em:</Text>
      <Space />
      <Text style={styles.textData}>
        {date.toString().substring(0, 10)} às{' '}
        {date.toString().substring(11, 16)}{' '}
      </Text>
      <Space />
      <Text style={styles.textER}>E o resultado foi:</Text>
      <Space />
      <Text style={styles.textResult}>{disease}</Text>
      <Space />
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Diagnostico')}>
        <View style={styles.buttonTop}>
          <Image style={styles.img} source={require('../Imagens/Img3.png')} />
          <Space />
          <Text style={styles.textButtons}>Faça o seu diagnóstico capilar</Text>
        </View>
      </TouchableWithoutFeedback>
      <Space />
      <View style={styles.containerBot}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Estatisticas')}>
          <View style={styles.buttonBottom}>
            <Image style={styles.img} source={require('../Imagens/Img4.png')} />
            <Space />
            <Text style={styles.textButtons}>Veja as suas estatísticas</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Previsoes')}>
          <View style={styles.buttonBottom}>
            <Image style={styles.img} source={require('../Imagens/Img6.png')} />
            <Space />
            <Text style={styles.textButtons}>Veja as suas previsões</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Space />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerBot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOS: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
  },
  textData: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FA8383',
  },
  textER: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
  },
  textButtons: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
  },
  textResult: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#FA8383',
  },
  buttonTop: {
    borderRadius: 6,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonBottom: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  img: {
    width: 150,
    height: 60,
  },
  viewBorder: {
    borderColor: 'black',
  },
});

export default Dashboard;
