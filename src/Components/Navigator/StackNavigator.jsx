import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screen routes
import Routes from './StackRoutes';

const Stack = createStackNavigator();

function StackNavigator() {

	return (
		<NavigationContainer>
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
							backgroundColor: '#6685A4',
						},
						headerTintColor: '#FFF',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					})}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default StackNavigator;