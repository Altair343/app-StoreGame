import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screen routes
import Routes from './DrawerRoutes';
import { DrawerContent } from '../Molecules/DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {

    return (
        <Drawer.Navigator
            headerMode="screen"
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={Routes.Home} />
            <Drawer.Screen name="Search" component={Routes.Search} />
            <Drawer.Screen name="Library" component={Routes.Library} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;

