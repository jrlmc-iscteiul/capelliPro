import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from 'react-native';
import Headerr from '../components/header';
import Space from '../components/space';
import useUserInfo from '../hooks/useUserInfo';

const capilarDiagnostic = ({navigation}) => {
  const [getUsername, name] = useUserInfo();

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} name={name} />

      <Image style={styles.img} source={require('../Imagens/Img5.png')} />
      <Space />
      {/* <Space /> */}

      <View style={styles.viewButton}>
        <Button
          style={styles.buttonDC}
          color="#5A5757"
          title="Diagnóstico Capilar"
          //onPress={() => navigation.navigate('Resultado')}
          onPress={() => navigation.navigate('ImagePicker')}
        />
      </View>
      <Text style={styles.textPF}>Por favor, ligue o seu analisador.</Text>
      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textPF: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    alignSelf: 'center',
  },
  viewButton: {
    //backgroundColor: 'blue',
    width: '80%',
    height: 54,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttonDC: {
    height: 54,
    alignItems: 'center',
    // borderRadius='30',
  },
  img: {
    alignSelf: 'center',
    width: 210,
    height: 180,
  },
});

export default capilarDiagnostic;
