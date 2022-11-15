import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from './screens/Home';
import CreateUser from './screens/CreateUser';
import Scaner from './screens/Scaner';

//icons
import { AntDesign } from '@expo/vector-icons'; //icono-home-scanner-usuario


const Stack = createNativeStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const Tabs = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tabs.Navigator
        initialRouteName="Home">
            <Tabs.Screen
                name="HelpEx" 
                component={Mystack}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({color , size}) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="Crear Usuario"
                component={CreateUser}
                options={{
                    tabBarIcon: ({color , size }) => (
                        <AntDesign name="adduser" size={24} color="black" />
                    ),
                }}
            />
            <Tabs.Screen
                name="Scaner"
                component={Scaner}
                options={{
                    tabBarIcon: ({color , size}) => (
                        <AntDesign name="scan1" size={24} color="black" />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
