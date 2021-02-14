import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// export default axios.create({
//   baseURL: 'http://192.168.1.118:5001',
// });

const fetchClient = () => {
  const defaultOptions = {
    baseURL: 'http://192.168.1.118:5001',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(async function (config) {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
  });

  return instance;
};

export default fetchClient();
