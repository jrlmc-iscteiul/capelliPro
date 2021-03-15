import React, {useContext, useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import Headerr from '../components/header';
import Space from '../components/space';
import useUserInfo from '../hooks/useUserInfo';
import * as ImagePicker from 'react-native-image-picker';
import {Context as AuthContext} from '../context/AuthContext';
import ImgToBase64 from 'react-native-image-base64';

const capilarDiagnostic = ({navigation}) => {
  const [getUsername, name] = useUserInfo();
  const {state, sendImage} = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);
  const [nav, changeNav] = useState(true);

  useEffect(() => {
    getUsername();
  }, []);

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    const st = true;

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('response', response);
      if (response.uri) {
        setPhoto(response);
        //const base64Value = response.data;
        changeNav(false);
      }
    });
  };

  const handleSendImage = () => {
    /* const base64Value = ImgToBase64.getBase64String(response.uri);
        console.log(base64Value);
        sendImage({base64Value}); */
  };

  return (
    <SafeAreaView style={styles.container}>
      <Headerr navigation={navigation} name={name} />

      {photo && (
        <Image source={{uri: photo.uri}} style={{width: 300, height: 300}} />
      )}
      <Image style={styles.img} source={require('../Imagens/Img5.png')} />
      <Space />

      <View style={styles.viewButton}>
        {nav ? (
          <Button
            style={styles.buttonDC}
            color="#5A5757"
            title="Escolher Imagem"
            onPress={handleChoosePhoto}
          />
        ) : (
          <Button
            style={styles.buttonDC}
            color="#5A5757"
            title="Efetuar Diagnostico"
            onPress={handleSendImage}
          />
        )}
      </View>
      {nav ? null : (
        <TouchableOpacity onPress={handleChoosePhoto}>
          <Text style={styles.textPF}>Selecionar outra imagem</Text>
        </TouchableOpacity>
      )}
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
