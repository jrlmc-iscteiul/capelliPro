import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Button,
  Platform,
} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';

class GetStartedFrame extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} source={require('../Imagens/cp.png')} />

        <Image
          style={styles.image2}
          source={require('../Imagens/imgGetStarted.png')}
        />

        <View style={styles.view}>
          <Text numberOfLines={4} ellipsizeMode="tail" text-align="center">
            A CapelliPro é uma forma de tratares do teu cabelo no conforto da
            tua casa, vai revolucionar os teus hábitos de tratamento!
          </Text>
        </View>

        <Button
          color="#5A5757"
          title="Começar com CapelliPro"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </SafeAreaView>
    );
  }
}

GetStartedFrame.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 83,
    height: 59,
    //position: 'absolute',
    bottom: 60,
  },
  image2: {
    width: 188.9,
    height: 189.47,
    bottom: 30,
    //position: 'absolute',
  },
  view: {
    width: 218,
    height: 72,
    bottom: 15,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
});

export default GetStartedFrame;
