import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import ProfileIcon from '../../assets/profileIcon.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../services/firebase';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      cpf: "",
      phone: "",
      errorCreateNewUser: ""
    };
  }

  render() {
    
    const GoToAddress = () => {
      this.props.navigation.navigate('Address');
    }

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.background}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerLogo}>
            <Image
              style={{
                width: 145,
                height: 145
              }}
              source={ProfileIcon} />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Nome Completo</Text>
            <TextInput
              style={styles.input}
              autoCompleteType="name"
              onChangeText={(text) => { this.setState({ name: text }) }}
              value={this.state.name} />

            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              onChangeText={(text) => { this.setState({ email: text }) }}
              value={this.state.email} />

            <Text style={styles.text}>Senha</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={(text) => { this.setState({ password: text }) }}
              value={this.state.password} />
            <Text style={styles.text}>CPF</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => { this.setState({ cpf: text }) }}
              value={this.state.cpf} />
            <Text style={styles.text}>Telefone</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => { this.setState({ phone: text }) }}
              value={this.state.phone} />
            {this.state.errorCreateNewUser == true
              ?
              <View style={styles.contentAlert}>
                <MaterialCommunityIcons
                  name="alert-circle"
                  size={24}
                  color="red"
                />
                <Text style={styles.warningAlert}>E-mail ou senha inválidos.</Text>
              </View>
              :
              <View></View>
            }
            <TouchableOpacity
              style={styles.btnAddress}
              onPress={GoToAddress}>
              <Text style={styles.addressTxt}>Endereços</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 15
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 5
  },
  input: {
    backgroundColor: '#E5E5E5',
    width: 227,
    height: 37,
    marginBottom: 5,
    color: '#222',
    fontSize: 20,
    borderRadius: 10,
    padding: 7,
  },
  text: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'Roboto',
    padding: 3
  },
  btnAddress: {
    backgroundColor: '#000',
    width: 170,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30
  },
  addressTxt: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'Roboto'
  },
  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  warningAlert: {
    paddingLeft: 10,
    color: "red",
    fontSize: 16
  }
});