import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// Nota: el renderizador de prueba debe ser requerido después de react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
