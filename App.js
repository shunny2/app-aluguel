import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Login from './src/views/Login';
import ForgotPassword from './src/views/ForgotPassword';
import UserForm from './src/views/UserForm';
import Home from './src/views/Home';
import Profile from './src/views/Profile';
import Address from './src/views/Address';
import Logout from './src/views/Logout';
import NewAddress from './src/views/NewAddress';
import MyProducts from './src/views/MyProducts';
import NewProduct from './src/views/NewProduct';
import ProductSeller from './src/views/ProductSeller';

import { AuthProvider } from './src/providers/auth';

import { CreateNewProduct } from './src/views/NewProduct';
import { UpdateProfile } from './src/views/Profile';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { state, ...rest } = props;
  const newState = { ...state };
  newState.routes = newState.routes.filter(
    (item) => item.name !== 'Address' && item.name !== 'NewAddress' && item.name !== 'NewProduct' && item.name !== 'ProductSeller'
  );

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  );
};

function DrawerScreens({ navigation }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
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
              <TouchableOpacity onPress={() => UpdateProfile()}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 24, fontFamily: 'Roboto', padding: 10 }}>Editar</Text>
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="MyProducts"
        component={MyProducts}
        options={{
          headerTitle: '',
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="cash"
              size={size}
              color={focused ? "#1E90FF" : "#808080"}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              size={size}
              color={focused ? "#1E90FF" : "#808080"}
            />
          )
        }}
      />
      <Drawer.Screen
        name="NewProduct"
        component={NewProduct}
        options={{
          headerTitle: '',
          drawerLabel: () => null,
          headerRight: (props) => {
            return (
              <TouchableOpacity onPress={() => CreateNewProduct()}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 24, fontFamily: 'Roboto', padding: 10 }}>Salvar</Text>
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="ProductSeller"
        component={ProductSeller}
        options={{
          headerTitle: '',
          drawerLabel: () => null,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => { }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ fontSize: 24, fontFamily: 'Roboto', padding: 10 }}>Editar</Text>
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Address"
        component={Address}
        options={{
          headerTitle: '',
          drawerLabel: () => null
        }}
      />
      <Drawer.Screen
        name="NewAddress"
        component={NewAddress}
        options={{
          headerTitle: '',
          drawerLabel: () => null
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
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
            name="DrawerScreens"
            component={DrawerScreens}
            options={{
              headerShown: false,
              title: 'Menu Lateral'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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