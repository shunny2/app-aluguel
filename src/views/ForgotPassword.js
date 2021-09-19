import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, Animated, Keyboard } from 'react-native';
import Logo from '../../assets/logo.png';
import firebase from '../views/config/firebase';

const ForgotPassword = (props) => {

    const [logo] = useState(new Animated.ValueXY({ x: 210, y: 210 }));

    const [email, setEmail] = useState('');

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

    const SendPasswordReset = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            props.navigation.pop();
            alert('Um e-mail de recuperação foi enviado para sua caixa de mensagens.');
        }).catch(() => {
            alert('Este e-mail não está cadastrado.')
        });
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
                <Text style={styles.text}>Informe seu email</Text>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    value={email} />

                <TouchableOpacity style={styles.btnSubmit} onPress={SendPasswordReset}>
                    <Text style={styles.submitTxt}>Nova Senha</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

export default ForgotPassword;

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
        paddingBottom: 55,
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
        width: 276,
        height: 58,
        marginBottom: 15,
        color: '#222',
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
    },
    text: {
        color: '#FFF',
        fontSize: 33,
        fontFamily: 'Roboto',
        padding: 12
    },
    btnSubmit: {
        backgroundColor: '#FFF',
        width: 170,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 57
    },
    submitTxt: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'Roboto'
    }
});
