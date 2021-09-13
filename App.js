import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login';
import ForgotPassword from './src/views/ForgotPassword';
import UserForm from './src/views/UserForm';

const Stack = createNativeStackNavigator()

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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#000'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}