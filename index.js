import { registerRootComponent } from 'expo';

import App from './src/App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

// registerRootComponent llama a AppRegistry.registerComponent ('main', () => App);
// También asegura que si carga la aplicación en el cliente Expo o en una compilación nativa,
// el entorno está configurado adecuadamente

registerRootComponent(App);
