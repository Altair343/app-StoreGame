import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Navigators
import StackNavigator from './StackNavigator';
import Home from './DrawerNavigator';

function Navigator() {

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default Navigator;