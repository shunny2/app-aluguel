import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import Logo from '../../assets/logo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import firebase from '../services/firebase';
import api from '../services/api';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            cpf: "",
            errorCreateNewUser: ""
        };
    }

    render() {

        const CreateNewUser = async () => {
            if (this.state.name != '' && this.state.email != '' && this.password != '' && this.cpf != '') {
                try {
                    const response = await api.post('/usuarios/create', {
                        nome: this.state.name,
                        email: this.state.email,
                        senha: this.state.password,
                        cpf_cnpj: this.state.cpf
                    });

                    //await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);

                    this.props.navigation.pop();

                    console.log(response.data);
                    
                    return response.data;

                } catch (error) {
                    console.log('Request Error:', error);
                }
            }else {
                this.setState({ errorCreateNewUser: true });
            }
        }

        /*const CreateNewUser = () => {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    console.log("Usuário criado! \n ID: " + user.uid);
                    this.props.navigation.pop();
                }).catch((error) => {
                    this.setState({ errorCreateNewUser: true });
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
        }*/

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.background}
            >
                <ScrollView>
                    <View style={styles.containerLogo}>
                        <Image
                            style={{
                                width: 210,
                                height: 210
                            }}
                            source={Logo} />
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
                        {this.state.errorCreateNewUser == true
                            ?
                            <View style={styles.contentAlert}>
                                <MaterialCommunityIcons
                                    name="alert-circle"
                                    size={24}
                                    color="red"
                                />
                                <Text style={styles.warningAlert}>Todos os campos devem serem preenchidos.</Text>
                            </View>
                            :
                            <View></View>
                        }
                        <TouchableOpacity
                            style={styles.btnSubmit}
                            onPress={CreateNewUser}>
                            <Text style={styles.submitTxt}>Cadastrar</Text>
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
        backgroundColor: '#000'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 45,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 5
    },
    input: {
        backgroundColor: '#FFF',
        width: 227,
        height: 37,
        marginBottom: 5,
        color: '#222',
        fontSize: 20,
        borderRadius: 10,
        padding: 7,
    },
    text: {
        color: '#FFF',
        fontSize: 24,
        fontFamily: 'Roboto',
        padding: 3
    },
    btnSubmit: {
        backgroundColor: '#FFF',
        width: 170,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    submitTxt: {
        color: '#000',
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
        fontSize: 12
    }
});