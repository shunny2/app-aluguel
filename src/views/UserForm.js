import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import Logo from '../../assets/logo.png';

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

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
                            onChangeText={() => { }} />

                        <Text style={styles.text}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={() => { }} />

                        <Text style={styles.text}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={() => { }} />
                        <Text style={styles.text}>CPF</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={() => { }} />

                        <TouchableOpacity
                            style={styles.btnSubmit}
                            onPress={() => this.props.navigation.pop()}>
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
    }
});