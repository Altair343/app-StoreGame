# App del proyecto StoreGame

[Api](https://github.com/Altair343/api-StoreGame)

[Dashboard](https://github.com/Altair343/dashboard-StoreGame)

### Detalles
Esta app está desarrollada en React native utilizando expo

## Instalación
Instalamos los módulos
```bash
yarn install o npm install
```

## Configuración
En la carpeta Api que se encuentra dentro src/Components/ dentro del archivo index.js configuramos la url de la api
```javascript
const urlBase = 'http://localhost:3000/api';
```

En el index del componente DetailsGame que se encuentra dentro de src/Components/Pages configuramos el public key de Strape en la función card
```javascript
 const card = async () => {
        Stripe.setOptionsAsync({
            publishableKey: 'pk_test_000000000', // Your key
            androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
        });
    }
```

## Iniciar proyecto
Tenemos diferentes comandos para iniciar el proyecto
```javascript
    "scripts": {
    "start": "expo start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "web": "expo start --web",
    "dev": "react-native start",
    "test": "jest",
    "eject": "expo eject"
    }
```
En este caso lo iniciaremos con expo
```bash
yarn start
```

## Construir aplicación
Para construir la aplicación puede hacerlo de la manera tradicional con Android Studio
o con [expo](https://docs.expo.io/distribution/building-standalone-apps/)