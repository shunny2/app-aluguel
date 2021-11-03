import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const NewAddress = (props) => {

    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [complement, setComplement] = useState('');
    const [errorCreateNewProduct, setErrorCreateNewProduct] = useState(false);

    const createNewAddress = async () => {

        if (street != '' && district != '' && zipCode != '' && city != '' && state != '') {
            try {
                const response = await api.post('/enderecos/create', {
                    rua: street,
                    bairro: district,
                    cep: zipCode,
                    cidade: city,
                    estado: state
                });

                //await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);

                this.props.navigation.push('DrawerScreens', { screen: 'Address' });

                console.log(response.data);

                return response.data;

            } catch (error) {
                console.log('Request Error:', error);
            }
        } else {
            setErrorCreateNewProduct(true);
        }
    }

    return (
        <ScrollView>
            <View style={styles.background}>
                <Text style={styles.titleTxt}>Novo Endereço</Text>
                <View>
                    <Text style={styles.text}>Rua</Text>
                    <TextInput
                        style={styles.input}
                        type="text"
                        autoCorrect={false}
                        onChangeText={(text) => setStreet(text)}
                        value={street} />
                    <Text style={styles.text}>Número</Text>
                    <TextInput
                        style={styles.input}
                        type="text"
                        autoCorrect={false}
                        onChangeText={(text) => setNumber(text)}
                        value={number} />
                    <Text style={styles.text}>Bairro</Text>
                    <TextInput
                        style={styles.input}
                        type="text"
                        autoCorrect={false}
                        onChangeText={(text) => setDistrict(text)}
                        value={district} />
                    <Text style={styles.text}>Cidade</Text>
                    <TextInput
                        style={styles.input}
                        type="text"
                        autoCorrect={false}
                        onChangeText={(text) => setCity(text)}
                        value={city} />
                    <Text style={styles.text}>Estado</Text>
                    <TextInput
                        style={styles.input}
                        type="text"
                        autoCorrect={false}
                        onChangeText={(text) => setState(text)}
                        value={state} />
                    <Text style={styles.text}>CEP</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        autoCorrect={false}
                        onChangeText={(text) => setZipCode(text)}
                        value={zipCode} />
                    <Text style={styles.text}>Complemento</Text>
                    <TextInput
                        style={styles.input}
                        type="text"
                        autoCorrect={false}
                        onChangeText={(text) => setComplement(text)}
                        value={complement} />
                </View>
                {errorCreateNewProduct == true
                    ?
                    <View style={styles.contentAlert}>
                        <MaterialCommunityIcons
                            name="alert-circle"
                            size={24}
                            color="red"
                        />
                        <Text style={styles.warningAlert}>Há campos obrigatórios que estão vazios.</Text>
                    </View>
                    :
                    <View></View>
                }
                <TouchableOpacity style={styles.btnAddress}
                    onPress={createNewAddress}>
                    <Text style={styles.addressTxt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default NewAddress;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    titleTxt: {
        fontSize: 36,
        fontFamily: 'Roboto',
        paddingBottom: 25,
        marginTop: 30
    },
    text: {
        fontSize: 24,
        fontFamily: 'Roboto',
        backgroundColor: '#FFF',
        textAlign: "left",
        margin: 15
    },
    btnAddress: {
        backgroundColor: '#000',
        width: 169,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
        marginBottom: 30
    },
    addressTxt: {
        color: '#FFF',
        fontSize: 24,
        fontFamily: 'Roboto',
        margin: 10,
        textAlign: "center"
    },
    input: {
        backgroundColor: '#E5E5E5',
        width: 372,
        height: 37,
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 10,
        padding: 10,
        marginBottom: 5
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
    },
});