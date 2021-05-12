/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PrimaryStack from './src/Stack/mainStack';

AppRegistry.registerComponent(appName, () => PrimaryStack);
