import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './src/views/Login';
import ForgotPassword from './src/views/ForgotPassword';
import UserForm from './src/views/UserForm';
import Home from './src/views/Home';
import Profile from './src/views/Profile';
import Address from './src/views/Address';
import Logout from './src/views/Logout';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerScreens({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={screenOptions}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: '',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="home-circle-outline"
              size={size}
              color={focused ? "#1E90FF" : "#808080"}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: '',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={size}
              color={focused ? "#1E90FF" : "#808080"}
            />
          ),
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 24, fontFamily: 'Roboto', padding: 10 }}>Editar</Text>
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="location-exit"
              size={size}
              color={focused ? "#1E90FF" : "#808080"}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => {
            return {
              headerShown: false,
              title: 'Login'
            }
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
            title: 'Esqueci a senha'
          }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{
            headerShown: false,
            title: 'Formulário de Usuários'
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            headerShown: false,
            title: 'Endereços'
          }}
        />
        <Stack.Screen
          name="DrawerScreens"
          component={DrawerScreens}
          options={{
            headerShown: false,
            title: 'Menu Lateral'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#FFF'
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}