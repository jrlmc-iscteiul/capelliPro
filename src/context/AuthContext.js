import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
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

const signin = (dispatch) => async ({email, password}) => {
  try {
    console.log('signin');
    const response = await trackerApi.post('/signin', {email, password});
    console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
    navigate('mainFlow');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signup = (dispatch) => async ({email, password}) => {
  try {
    console.log('signup');
    const response = await trackerApi.post('/signup', {email, password});
    console.log('Erro:' + response.data.token);
    await AsyncStorage.setItem('token', response.data.token);
    console.log('async');
    dispatch({type: 'signin', payload: response.data.token});
    console.log('dispatch');

    navigate('Survey');
  } catch (err) {
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

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signup, signout, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
