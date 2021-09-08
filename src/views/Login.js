import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Animated, Keyboard } from 'react-native';
import Logo from '../../assets/logo.png';

const Login = () => {

    const [logo] = useState(new Animated.ValueXY({ x: 210, y: 210 }));

    useEffect(() => { //useEffect vai renderizar somente uma vez quando a tela é carregada.
        /*Chamando as funções de quando o teclado está aberto e fechado.*/
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardHidehowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    }, []);

    /*Funções que verifica se o teclado está aberto ou fechado*/
    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 210,
                duration: 400,
                useNativeDriver: false
            }),
            Animated.timing(logo.y, {
                toValue: 210,
                duration: 400,
                useNativeDriver: false
            }),
        ]).start();
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image
                    style={{
                        width: logo.x,
                        height: logo.y
                    }}
                    source={Logo} />
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    onChangeText={() => { }} />

                <Text style={styles.text}>Senha</Text>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    onChangeText={() => { }} />

                <TouchableOpacity style={styles.btnForgetPass}>
                    <Text style={styles.forgetPassAndRegisterTxt}>Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.submitTxt}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.forgetPassAndRegisterTxt}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 100
    },
    input: {
        backgroundColor: '#FFF',
        width: 227,
        height: 37,
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 10,
        padding: 10,
        marginBottom: 5
    },
    text: {
        color: '#FFF',
        fontSize: 24,
        fontFamily: 'Roboto',
        padding: 8
    },
    btnSubmit: {
        backgroundColor: '#FFF',
        width: 170,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    submitTxt: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'Roboto'
    },
    btnRegister: {
        marginTop: 10
    },
    btnForgetPass: {
        marginBottom: 30
    },
    forgetPassAndRegisterTxt: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18
    },
});