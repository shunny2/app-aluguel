import React, { useState, useEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Text, Animated, Keyboard } from 'react-native';
import Logo from '../../assets/logo.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AuthContext } from '../providers/auth';

import api from '../services/api';

const Login = (props) => {

    const [logo] = useState(new Animated.ValueXY({ x: 210, y: 210 }));

    const { user, setUser } = React.useContext(AuthContext);
    let users = [];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState('');
    const [errorEmptyField, setErrorEmptyField] = useState('');

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

    const Login = async () => {
        if (email != '' & password != '') {
            try {
                const response = await api.post('/usuarios/authenticate', {
                    email: email,
                    senha: password
                });

                //await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);
                
                users = response.data;

                // setUser({user_id: users.usuario.id});
                // setUser({name: users.usuario.nome});
                // setUser({email: users.usuario.email});
                user.user_id = users.usuario.id;
                user.name = users.usuario.nome;
                user.email = users.usuario.email;

                console.log(user);

                // props.navigation.navigate('DrawerScreens', { screen: 'Home', params: { user: user } }); 
                props.navigation.navigate('DrawerScreens', { screen: 'Home' });

                return response.data;

            } catch (error) {
                let errorMessage = error.message;
                console.log(errorMessage);
                console.log('Request Error:', error);
                setErrorLogin(true);
                setErrorEmptyField(false);
            }
        } else {
            setErrorEmptyField(true);
            setErrorLogin(false);
        }
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

                <TouchableOpacity onPress={() => props.navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgetPassAndRegisterTxt}>Esqueci a senha</Text>
                </TouchableOpacity>

                {errorEmptyField == true
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

                {errorLogin == true
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
        borderRadius: 10,
        marginTop: 30
    },
    submitTxt: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'Roboto'
    },
    btnRegister: {
        marginTop: 10
    },
    forgetPassAndRegisterTxt: {
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18
    },
    contentAlert: {
        marginTop: 10,
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