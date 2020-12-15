import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

//const handleDiagnosticButton = () => console.log('button of diagnostic pressed');

function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <View style={styles.buttons} style={{backgroundColor: 'white'}}>
          <TouchableOpacity>
            <Image
              style={styles.menuSimbol}
              source={require('../Imagens/menu.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Diagnostico')}>
            <Image
              style={styles.imageMenu}
              source={require('../Imagens/diagnostico.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Estatisticas')}>
            <Image
              style={styles.imageMenu}
              source={require('../Imagens/estatisticas.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Previsoes')}>
            <Image
              style={styles.imageMenu}
              source={require('../Imagens/previsoes.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Image
              style={styles.imageMenu}
              source={require('../Imagens/conta.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <Image
              style={styles.imageMenu}
              source={require('../Imagens/configuracoes.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons} style={{backgroundColor: 'white'}}>
          <TouchableOpacity>
            <Image
              style={styles.menuSimbol}
              source={require('../Imagens/instagram-brands.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '55%',
    height: '100%',
    //alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 15,
    //justifyContent: 'space-evenly',
    //flexDirection: 'column',
  },
  view: {
    //backgroundColor: 'pink',
    alignItems: 'flex-start',
    // width: '50%',
    height: '50%',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  menuSimbol: {
    width: 27,
    height: 27,
  },
  imageMenu: {
    width: '100%',
    height: 50,
  },
  buttons: {
    backgroundColor: '#d3d3d3',
    width: '100%',
    height: 40,
  },
});

export default Menu;
