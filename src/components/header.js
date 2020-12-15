import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Space from '../components/space';

export default function Headerr({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../Imagens/fundoUser.png')}
        style={styles.image}>
        <Space />
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.menuIcon}
            source={require('../Imagens/menuIcon.png')}
          />
        </TouchableOpacity>
        <Space />
        <Image
          style={styles.viewImageUser}
          source={require('../Imagens/ma.png')}
        />
        <Space />
        <Text style={styles.textUser}>Maria Antónia</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
  },
  viewImageUser: {
    width: 74,
    height: 74,
    alignSelf: 'center',
    borderRadius: 30,
  },
  textUser: {
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: 200,
  },
  menuIcon: {
    width: 27,
    height: 27,
    left: 10,
  },
});
