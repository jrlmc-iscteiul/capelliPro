import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Spacer from '../components/Spacer';

class Survey extends React.Component {
  state = {
    firstQuestion: null,
    secondQuestion: null,
    thirdQuestion: null,
    fourthQuestion: null,
    fifthQuestion: null,
    sixthQuestion: null,
    eighthQuestion: null,
    ninethQuestion: null,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../Imagens/marble.jpg')}>
          <Image
            style={styles.menuIcon}
            source={require('../Imagens/menuIcon.png')}
          />
          <Text style={styles.text}>Inquérito Inicial</Text>
          <Text style={styles.subText}>Vamos começar!</Text>
        </ImageBackground>

        <ScrollView>
          <View style={styles.view}>
            <Spacer />
            <Text style={styles.questionsText}>1. Quantos anos tem?</Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.firstQuestion}
                //itemStyle={{fontFamily: 'Roboto', fontSize: 13}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({firstQuestion: itemValue})
                }>
                <Picker.Item label="Menos de 18 anos" value="under18" />
                <Picker.Item label="18-25 anos" value="18-25" />
                <Picker.Item label="26-35 anos" value="26-35" />
                <Picker.Item label="36-45 anos" value="36-45" />
                <Picker.Item label="46-55 anos" value="46-55" />
                <Picker.Item label="56-65 anos" value="56-65" />
                <Picker.Item label="Acima de 65 anos" value="over65" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>
              2. Qual é o seu tipo de cabelo?
            </Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.secondQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({secondQuestion: itemValue})
                }>
                <Picker.Item label="Liso" value="liso" />
                <Picker.Item label="Ondulado" value="ondulado" />
                <Picker.Item label="Encaracolado" value="encaracolado" />
                <Picker.Item label="Frisado" value="frisado" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>3. Tem cabelo pintado?</Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.thirdQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({thirdQuestion: itemValue})
                }>
                <Picker.Item label="Sim" value="yes" />
                <Picker.Item label="Não" value="no" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>
              4. Qual a sua cor de cabelo natural?
            </Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.fourthQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({fourthQuestion: itemValue})
                }>
                <Picker.Item label="Preto" value="preto" />
                <Picker.Item label="Castanho" value="castanho" />
                <Picker.Item label="Loiro" value="loiro" />
                <Picker.Item label="Ruivo" value="ruivo" />
                <Picker.Item label="Grisalho" value="grisalho" />
                <Picker.Item label="Outra cor" value="outra cor" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>
              5. Quantas vezes lava o cabelo por semana?
            </Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.fifthQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({fifthQuestion: itemValue})
                }>
                <Picker.Item label="1x por semana" value="1x" />
                <Picker.Item label="2-3x por semana" value="2-3x" />
                <Picker.Item label="Dia sim dia não" value="diaSimDiaNao" />
                <Picker.Item label="Todos os dias" value="everyday" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>6. Onde vive?</Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.sixthQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({sixthQuestion: itemValue})
                }>
                <Picker.Item label="Centro urbano" value="centroUrbano" />
                <Picker.Item label="Arredores" value="arredores" />
                <Picker.Item label="Campo" value="campo" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>
              7. Usa ferramentas de calor?
            </Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.seventhQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({seventhQuestion: itemValue})
                }>
                <Picker.Item label="Sim" value="yes" />
                <Picker.Item label="Não" value="no" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>8. Usa produtos térmicos?</Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.eighthQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({eighthQuestion: itemValue})
                }>
                <Picker.Item label="Sim" value="yes" />
                <Picker.Item label="Não" value="no" />
              </Picker>
            </View>
            <Spacer />

            <Text style={styles.questionsText}>
              9. Como gostava que o seu cabelo fosse?
            </Text>

            <View style={styles.picker}>
              <Picker
                selectedValue={this.state.ninethQuestion}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ninethQuestion: itemValue})
                }>
                <Picker.Item label="Longo" value="longo" />
                <Picker.Item label="Liso" value="liso" />
                <Picker.Item label="Caracóis Perfeitos" value="caracois" />
                <Picker.Item label="Mais brilhante" value="brilho" />
                <Picker.Item label="Mais denso" value="denso" />
                <Picker.Item label="Mais volume" value="volume" />
              </Picker>
            </View>

            <Spacer />

            <Button
              style={styles.button}
              color="#5A5757"
              title="Pronto"
              onPress={() => this.props.navigation.navigate('Perfil')}
            />
          </View>
          <Spacer />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Survey.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    //backgroundColor: 'pink',
    alignContent: 'flex-start',
    // alignItems:'center',
    width: '100%',
  },
  backgroundImage: {
    //flex: 1,
    resizeMode: 'cover',
    height: 100,
    width: '100%',
    backgroundColor: 'blue',
  },
  scroll: {
    backgroundColor: 'blue',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    justifyContent: 'center',
  },
  subText: {
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  questionsText: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  picker: {
    // backgroundColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#d3d3d3',
    paddingLeft: 10,
  },
  menuIcon: {
    width: 27,
    height: 27,
    left: 10,
  },
  button: {
    width: 273,
    height: 54,
    borderRadius: 4,
  },
});

export default Survey;
