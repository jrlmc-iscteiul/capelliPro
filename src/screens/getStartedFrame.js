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

        <View
          style={{
            width: '100%',
            height: 40,
          }}></View>

        <Image
          style={styles.image2}
          source={require('../Imagens/imgGetStarted.png')}
        />

        <Spacer />
        
        <View style={styles.view}>
          <Text numberOfLines={4} ellipsizeMode="tail">
            A CapelliPro é uma forma de tratares do teu cabelo no conforto da
            tua casa, vai revolucionar os teus hábitos de tratamento!
          </Text>
        </View>

        <Spacer />

        <Button
          style={styles.button}
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
  },
  image2: {
    width: 188.9,
    height: 189.47,
    //position: 'absolute',
  },
  view: {
    alignItems: 'center',
    width: 218,
    height: 72,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  button: {
    width: 273,
    height: 54,
    borderRadius: 4,
  },
});

export default GetStartedFrame;
