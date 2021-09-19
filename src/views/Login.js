import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Animated, Keyboard } from 'react-native';
import Logo from '../../assets/logo.png';
import firebase from '../views/config/firebase';

const Login = (props) => {

    const [logo] = useState(new Animated.ValueXY({ x: 210, y: 210 }));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');

    useEffect(() => { //useEffect vai renderizar somente uma vez quando a tela é carregada.
        /*Chamando as funções de quando o teclado está aberto e fechado.*/
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardHidehowListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        //Verifica se tem um usuário ja logado. caso sim entra automaticamente.
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                //navigation.navigate("Perfil", { idUser: user.uid });
                console.log('Login automatico realizado. \n ID: ' + user.uid);
            }
        });
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

    const Login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                console.log("Usuário logado! \n ID: " + user.uid);
            }).catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
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
                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                    value={email} />

                <Text style={styles.text}>Senha</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    autoCorrect={false}
                    onChangeText={(text) => setPassword(text)}
                    value={password} />

                <TouchableOpacity style={styles.btnForgetPass} onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgetPassAndRegisterTxt}>Esqueci a senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmit} onPress={Login}>
                    <Text style={styles.submitTxt}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister} onPress={() => props.navigation.navigate('UserForm')}>
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