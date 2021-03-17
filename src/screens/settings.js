import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Switch,
} from 'react-native';

import Space from '../components/space';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  textT: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    left: 20,
    color: '#D3D3D3',
  },
  textB: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    left: 20,
  },
  viewT: {
    backgroundColor: '#5A5757',
    height: 25,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
  },
  viewB: {
    backgroundColor: 'white',
    height: 45,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
  },
  centerButton: {
    justifyContent: 'center',
    right: 30,
  },
  containerButton: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 45,
  },
});

export default function Settings() {
  const [switchNotific, setSwitchNotif] = React.useState(false);
  const [switchNoite, setSwitchNoite] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewT}>
        <Text style={styles.textT}>Notificações</Text>
      </View>

      <View style={styles.containerButton}>
        <View style={styles.center}>
          <Text style={styles.textB}>Ativar notificações</Text>
        </View>
        <View style={styles.centerButton}>
          <Switch
            value={switchNotific}
            onValueChange={(value) => setSwitchNotif(value)}
          />
        </View>
      </View>

      <View style={styles.viewT}>
        <Text style={styles.textT}>Tema</Text>
      </View>

      <View style={styles.containerButton}>
        <View style={styles.center}>
          <Text style={styles.textB}>Modo noite</Text>
        </View>
        <View style={styles.centerButton}>
          <Switch
            value={switchNoite}
            onValueChange={(v) => setSwitchNoite(v)}
          />
        </View>
      </View>
      <View style={styles.viewT}>
        <Text style={styles.textT}>Outros</Text>
      </View>
      <View style={styles.viewB}>
        <Text style={styles.textB}>Classificar a aplicação</Text>
      </View>
      <View style={styles.viewB}>
        <Text style={styles.textB}>Versão</Text>
      </View>

      <Space />
      <Space />
      <Space />
      <Space />
      <Space />
    </SafeAreaView>
  );
}
