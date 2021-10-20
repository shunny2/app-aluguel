import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const NewAddress = (props) => {

    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [CEP, setCEP] = useState('');
    const [complemento, setComplemento] = useState('');

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
                    onChangeText={(text) => setRua(text)}
                    value={rua} />
                <Text style={styles.text}>Número</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setNumero(text)}
                    value={numero} />
                <Text style={styles.text}>Bairro</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setBairro(text)}
                    value={bairro} />
                <Text style={styles.text}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setCidade(text)}
                    value={cidade} />
                <Text style={styles.text}>Estado</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setEstado(text)}
                    value={estado} />
                <Text style={styles.text}>CEP</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setCEP(text)}
                    value={CEP} />
                <Text style={styles.text}>Complemento</Text>
                <TextInput
                    style={styles.input}
                    type="text"
                    autoCorrect={false}
                    onChangeText={(text) => setComplemento(text)}
                    value={complemento} />
            </View>
            <TouchableOpacity style={styles.btnAddress}
            onPress={() => props.navigation.navigate('Address')}>
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
        backgroundColor:'#FFF',
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

});