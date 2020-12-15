import React, {Component, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import {Context as AuthContext, Context} from '../context/AuthContext';

export default class CustomDrawerContent extends Component {
  static contextType = Context;
  render() {
    const {signout} = this.context;
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <DrawerItems {...this.props} />

          {/* <DrawerItem
                    icon={() => (
                        <Icon icon='eye' solid color="blue" size={32} />)}
                    label="Diagnóstico"
                    onPress={() => props.navigation.navigate('Diagnostico')}
                />
                <DrawerItem
                    icon={() => (
                        <Icon icon='eye' solid color="blue" size={32} />)}
                    label="Estatísticas"
                    onPress={() => props.navigation.navigate('Estatisticas')}
                />
                <DrawerItem
                    icon={() => (
                        <Icon icon='eye' solid color="blue" size={32} />)}
                    label="Previsões"
                    onPress={() => props.navigation.navigate('Previsoes')}
                />
                <DrawerItem
                    icon={() => (
                        <Icon icon='eye' solid color="blue" size={32} />)}
                    label="Perfil"
                    onPress={() => props.navigation.navigate('Perfil')}
                />
                <DrawerItem
                    icon={() => (
                        <Icon icon='eye' solid color="blue" size={32} />)}
                    label="Configurações"
                    onPress={() => props.navigation.navigate('Settings')}
                /> */}
          <View elevation={6} style={{backgroundColor: '#ffffff'}}>
            <TouchableNativeFeedback onPress={signout}>
              <View style={styles.containDrawerOption}>
                <Icon
                  name="logout"
                  type="simple-line-icon"
                  size={20}
                  containerStyle={{marginRight: '10%'}}
                />
                <Text style={{color: 'black', fontFamily: 'sans-serif-medium'}}>
                  Logout
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containDrawerOption: {
    paddingLeft: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '1%',
    paddingBottom: '5%',
    backgroundColor: '#e6e6e6',
  },
  container: {
    flex: 1,
  },
});
