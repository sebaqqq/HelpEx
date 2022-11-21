import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from './screens/Home';
import CreateUser from './screens/CreateUser';
import Scaner from './screens/Scaner';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeLogin';

//icons
import { AntDesign } from '@expo/vector-icons'; //icono-home-scanner-usuario-login
import EditUser from "./screens/EditUser";
import ShowEdit from './screens/ShowEdit';
import Photo from './screens/Photo';

const Stack = createNativeStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cuenta" component={LoginScreen} />
      <Stack.Screen name="CreateUser" component={CreateUser} /> 
      <Stack.Screen name="ShowEdit" component={ShowEdit} />
      <Stack.Screen name="EditUser" component={EditUser} /> 
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Home" component={HomeScreen} />
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
                component={Home}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({color , size}) => (
                        <AntDesign name="home" size={24} color="#5b6f7f" />
                    ),
                    
                }}
            />
            {/* <Tabs.Screen
                name="Scaner"
                component={Scaner}
                options={{
                    tabBarIcon: ({color , size}) => (
                        <AntDesign name="scan1" size={24} color="#5b6f7f" />
                    ),
                }}
            /> */}
            <Tabs.Screen
                name="Login"
                component={Mystack}
                options={{
                    tabBarIcon: ({color , size}) => (
                        <AntDesign name="login" size={24} color="#5b6f7f" />
                    ),
                    headerShown: false,
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
