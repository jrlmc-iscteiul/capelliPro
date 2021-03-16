/* eslint-disable prettier/prettier */
import createDataContext from './createDataContext';
//import trackerApi from '../api/tracker';
import ServerApi from '../api/ServerCapelliPro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';
import axios from 'axios';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};

const signin = (dispatch) => async ({username, password}) => {
  try {
    console.log('signin');

    const response = await ServerApi.post('/api/Auth/login', {
      username,
      password,
    });

    console.log('response: ' + response.data.token);

    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
  try {
    const HasValidSurvey = await ServerApi.get('/api/Survey/HasValidSurvey');
    navigate('mainFlow');
  } catch (error) {
    navigate('Survey');
  }
};

const signup = (dispatch) => async ({name, email, password}) => {
  try {
    console.log('signup');
    await AsyncStorage.setItem('nameUser', name);

    const response = await ServerApi.post('/api/Auth/register', {
      name,
      email,
      password,
    });
    navigate('Signin');
  } catch (err) {
    console.log(err);
    console.log('catch:');
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
  navigate('loginFlow');
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
    navigate('mainFlow');
  } else {
    navigate('loginFlow');
  }
};

const sendSurvey = (dispatch) => async ({
  age,
  hairType,
  hairColour,
  hasColouredHair,
  numberWashes,
  livingPlace,
  useHeatTools,
  useThermalProducts,
  desiredHair,
}) => {
  try {
    console.log('sendSurvey');

    const response = await ServerApi.post('/api/Survey/survey', {
      age,
      hairType,
      hairColour,
      hasColouredHair,
      numberWashes,
      livingPlace,
      useHeatTools,
      useThermalProducts,
      desiredHair,
    });
    console.log('done ' + response);

    navigate('Perfil');
  } catch (err) {
    console.log(err);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with survey',
    });
  }
};

const sendImage = (dispatch) => async (image) => {
  try {
    console.log('sendImage');
    await ServerApi.post('/api/ImageCapilar/imageCapilar', {
      base64Image: image,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with send image',
    });
  }
};

/* const getUsername = (dispatch) => async({}) => {
  try {
    console.log('getUsername');

    const response = await ServerApi.get('/api/Auth/GetUserName');
    return response;

  } catch (error) {
    console.log(error);
  }
};
 */

export const {Provider, Context} = createDataContext(
  authReducer,
  {
    signin,
    signup,
    signout,
    clearErrorMessage,
    tryLocalSignin,
    sendSurvey,
    sendImage,
  },
  {token: null, errorMessage: ''},
);
