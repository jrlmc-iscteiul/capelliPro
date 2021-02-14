/* eslint-disable prettier/prettier */
import createDataContext from './createDataContext';
//import trackerApi from '../api/tracker';
import ServerApi from '../api/ServerCapelliPro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';

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

    console.log('response: ' + response.data);
    console.log('response: ' + response.data.token);

    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});

    //navigate('mainFlow');
    navigate('Survey');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signup = (dispatch) => async ({name, email, password}) => {
  try {
    console.log('signup');
    const response = await ServerApi.post('/api/Auth/register', {
      name,
      email,
      password,
    });

    /* await AsyncStorage.setItem('token', response.data.token);
    console.log('async');
    dispatch({type: 'signup', payload: response.data.token});
    console.log('dispatch'); */

    //navigate('Survey');
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
  tokenUser,
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
    //const tokenUser = await AsyncStorage.getItem('token');
    const tokenUser = 'etin12';
    console.log(tokenUser + ' ' + age + ' ' + hairType + ' ' + hairColour + ' ' + hasColouredHair + ' ' + numberWashes + ' ' + livingPlace + ' ' + useHeatTools + ' ' + useThermalProducts + ' ' + desiredHair,);

    const response = await ServerApi.post('/api/Survey/survey', {
      tokenUser,
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

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearErrorMessage, tryLocalSignin, sendSurvey},
  {token: null, errorMessage: ''},
);
