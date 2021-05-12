import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


// Screen routes
import Routes from './StackRoutes';
import Home from './DrawerNavigator';

// Styles conguration
import varStyles from '../../assets/styles/VarStyles';

const Stack = createStackNavigator();

function StackNavigator() {

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Login"
				component={Routes.Login}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Register"
				component={Routes.Register}
				options={(nav) => ({
					title: "Registro",
					headerStyle: {
						backgroundColor: varStyles.grey.G900,
					},
					headerTintColor: varStyles.grey.G600,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				})}
			/>
			<Stack.Screen
				name="SearchCategory"
				component={Routes.SearchCategory}
				options={{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="DetailsGame"
				component={Routes.DetailsGame}
				options={{
					headerShown: false,
				}}
			/>

		</Stack.Navigator>
	);
}

export default StackNavigator;