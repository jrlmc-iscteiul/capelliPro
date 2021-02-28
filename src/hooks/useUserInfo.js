import {useState} from 'react';
import ServerApi from '../api/ServerCapelliPro';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const [name, setName] = useState([]);

  const getUsername = async () => {
    try {
      const response = await ServerApi.get('/api/Auth/GetUserName');
      await AsyncStorage.setItem('username', response.data.name);
      setName(await AsyncStorage.getItem('username'));
      console.log('nome: ' + name);
    } catch (err) {
      console.log(err);
    }
  };

  return [getUsername, name];
};
