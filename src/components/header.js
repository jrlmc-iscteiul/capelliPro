import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Space from '../components/space';

const Headerr = ({navigation, name}) => {
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
          source={require('../Imagens/default-user-image.png')}
        />
        <Space />
        <Text style={styles.textUser}>{name}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '50%',
  },
  viewImageUser: {
    width: 74,
    height: 74,
    alignSelf: 'center',
    borderRadius: 40,
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

export default Headerr;
