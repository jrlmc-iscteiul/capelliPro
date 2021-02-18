import React, {useState} from 'react';
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
import ServerApi from '../api/ServerCapelliPro';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}) => {
  const [name, setName] = useState('Username');

  const getUsername = async () => {
    try {
      const response = await ServerApi.get('/api/Auth/GetUserName');
      setName(response.data.name);
     // await AsyncStorage.setItem('username', response.data.name);
    } catch (error) {
      console.log(error);
      setName('Utilizador');
    }
  };

  getUsername();

  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} name={name}/>
      <Space />
      <Text style={styles.textOS}>O seu último diagnóstico foi em:</Text>
      <Space />
      <Text style={styles.textData}>5 de Junho de 2020</Text>
      <Space />
      <Text style={styles.textER}>E o resultado foi:</Text>
      <Space />
      <Text style={styles.textResult}>Piolhos</Text>
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
          <View style={styles.buttonLeft}>
            <Image style={styles.img} source={require('../Imagens/Img4.png')} />
            <Space />
            <Text style={styles.textButtons}>Veja as suas estatísticas</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Previsoes')}>
          <View style={styles.buttonRight}>
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
    borderWidth: 2,
  },
  buttonLeft: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonRight: {
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
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
