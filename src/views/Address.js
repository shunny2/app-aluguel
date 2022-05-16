import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native';

import api from '../services/api';

class Address extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adresses: [],
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        api.get('/enderecos').then(response => {
            const results = response.data;
            this.setState({
                adresses: results,
                loading: false,
            });
            console.log(results);
        }).catch(error => {
            this.setState({ error: true, loading: false });
            console.log(error);
        });
    }

    render() {
        return (
            <View style={styles.background}>
                {
                    this.state.loading
                        ? <ActivityIndicator size="large" color="#0000ff" />
                        : this.state.error
                            ? <Text style={styles.error}>Ops... Algo deu errado :(</Text>
                            : <FlatList
                                showsVerticalScrollIndicator={false}
                                style={styles.container}
                                data={this.state.adresses}
                                renderItem={({ item }) => (
                                    <View style={styles.container}>
                                        <Text style={styles.text}>Rua: {item.rua}</Text>
                                        <Text style={styles.text}>Bairro: {item.bairro}</Text>
                                        <Text style={styles.text}>CEP: {item.cep}</Text>
                                        <Text style={styles.text}>Cidade: {item.cidade}</Text>
                                        <Text style={styles.text}>Estado: {item.estado}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.nome}
                            />
                }
                <TouchableOpacity style={styles.btnAddress}
                    onPress={() => this.props.navigation.navigate('NewAddress')}>
                    <Text style={styles.addressTxt}>Novo Endereço</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Address;

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
        paddingBottom: 25
    },
    text: {
        fontSize: 36,
        fontFamily: 'Roboto',
        backgroundColor: '#E5E5E5',
        margin: 15
    },
    btnAddress: {
        backgroundColor: '#000',
        width: 170,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 30
    },
    addressTxt: {
        color: '#FFF',
        fontSize: 24,
        fontFamily: 'Roboto',
        margin: 10,
        textAlign: "center"
    },
    container: {
        flex: 1,
        margin: 15
    },
    error: {
        color: 'red',
        fontSize: 16,
        alignSelf: 'center'
    }
});