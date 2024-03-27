/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppDemo from './screens/AppDemo';
import runApp from './1pm.js/runApp';

AppRegistry.registerComponent(appName, () => runApp);
