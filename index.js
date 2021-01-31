/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
/* import capilarDiagnostic from './src/screens/capilarDiagnostic';
import Dashboard from './src/screens/dashboard';
import Forecasts from './src/screens/forecasts';
import GetStarted from './src/screens/getStartedFrame';
import Statistics from './src/screens/statistics'; */
import App from './src/screens/Survey.js';

AppRegistry.registerComponent(appName, () => App);
