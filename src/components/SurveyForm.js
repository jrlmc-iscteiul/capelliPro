import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {View} from 'react-native';
import Spacer from './Spacer';
import {Picker} from '@react-native-picker/picker';

const SurveyForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
  const [age, setAge] = useState('under18');
  const [hairType, setHairType] = useState('liso');
  const [hairColour, setHairColour] = useState('preto');
  const [hasColouredHair, setHasColouredHair] = useState('true');
  const [numberWashes, setNumberWashes] = useState('1x');
  const [livingPlace, setLivingPlace] = useState('centroUrbano');
  const [useHeatTools, setUseHeatTools] = useState('true');
  const [useThermalProducts, setUseThermalProducts] = useState('true');
  const [desiredHair, setDesiredHair] = useState('longo');

  return (
    <>
      <Text style={styles.questionsText}>1. Quantos anos tem?</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={age}
          //itemStyle={{fontFamily: 'Roboto', fontSize: 13}}
          onValueChange={(itemValue) => setAge(itemValue)}>
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
      <Text style={styles.questionsText}>2. Qual é o seu tipo de cabelo?</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={hairType}
          onValueChange={(itemValue) => setHairType(itemValue)}>
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
          selectedValue={hasColouredHair}
          onValueChange={(itemValue) => setHasColouredHair(itemValue)}>
          <Picker.Item label="Sim" value="true" />
          <Picker.Item label="Não" value="false" />
        </Picker>
      </View>

      <Spacer />
      <Text style={styles.questionsText}>
        4. Qual a sua cor de cabelo natural?
      </Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={hairColour}
          onValueChange={(itemValue) => setHairColour(itemValue)}>
          <Picker.Item label="Preto" value="preto" />
          <Picker.Item label="Castanho" value="castanho" />
          <Picker.Item label="Loiro" value="loiro" />
          <Picker.Item label="Ruivo" value="ruivo" />
          <Picker.Item label="Grisalho" value="grisalho" />
          <Picker.Item label="Outra cor" value="outraCor" />
        </Picker>
      </View>

      <Spacer />
      <Text style={styles.questionsText}>
        5. Quantas vezes lava o cabelo por semana?
      </Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={numberWashes}
          onValueChange={(itemValue) => setNumberWashes(itemValue)}>
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
          selectedValue={livingPlace}
          onValueChange={(itemValue) => setLivingPlace(itemValue)}>
          <Picker.Item label="Centro urbano" value="centroUrbano" />
          <Picker.Item label="Arredores" value="arredores" />
          <Picker.Item label="Campo" value="campo" />
        </Picker>
      </View>

      <Spacer />
      <Text style={styles.questionsText}>7. Usa ferramentas de calor?</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={useHeatTools}
          onValueChange={(itemValue) => setUseHeatTools(itemValue)}>
          <Picker.Item label="Sim" value="true" />
          <Picker.Item label="Não" value="false" />
        </Picker>
      </View>

      <Spacer />
      <Text style={styles.questionsText}>8. Usa produtos térmicos?</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={useThermalProducts}
          onValueChange={(itemValue) => setUseThermalProducts(itemValue)}>
          <Picker.Item label="Sim" value="true" />
          <Picker.Item label="Não" value="false" />
        </Picker>
      </View>
      <Spacer />

      <Text style={styles.questionsText}>
        9. Como gostava que o seu cabelo fosse?
      </Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={desiredHair}
          onValueChange={(itemValue) => setDesiredHair(itemValue)}>
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
        buttonStyle={{backgroundColor: '#5A5757'}}
        title={submitButtonText}
        onPress={() =>
          onSubmit({
            age,
            hairType,
            hairColour,
            hasColouredHair,
            numberWashes,
            livingPlace,
            useHeatTools,
            useThermalProducts,
            desiredHair,
          })
        }
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    alignContent: 'flex-start',
    width: '100%',
  },
  backgroundImage: {
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

export default SurveyForm;
