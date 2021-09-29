import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Address = (props) => {
    return (
        <View style={styles.background}>
            <Text style={styles.titleTxt}>Endereços</Text>
            <View>
                <Text style={styles.text}>Teste</Text>
                <Text style={styles.text}>Teste</Text>
            </View>
            <TouchableOpacity style={styles.btnAddress}
            onPress={() => {}}>
                <Text style={styles.addressTxt}>Novo Endereço</Text>
            </TouchableOpacity>
        </View>
    );
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
        backgroundColor:'#E5E5E5',
        margin: 15
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
        fontFamily: 'Roboto',
        margin: 10,
        textAlign: "center"
    }
});