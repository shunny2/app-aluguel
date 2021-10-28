import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const MyProducts = (props) => {
    return (
        <View style={styles.background}>
            <Text style={styles.titleTxt}>Meus Produtos</Text>
            <View>
                <Text style={styles.text}>Produto 1             R$30</Text>
                <Text style={styles.text}>Produto 2             R$80</Text>
                <Text style={styles.text}>Produto 3             R$90</Text>
                <Text style={styles.text}>Produto 4             R$70</Text>
                <Text style={styles.text}>Produto 5             R$60 Aluguel:                R$6</Text>
            </View>
            <TouchableOpacity style={styles.btnProduto}
                onPress={() => props.navigation.navigate('NewProduct')}>
                <Text style={styles.produtoTxt}>Novo Produto</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MyProducts;

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
    btnProduto: {
        backgroundColor: '#000',
        width: 170,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30
    },
    produtoTxt: {
        color: '#FFF',
        fontSize: 24,
        fontFamily: 'Roboto',
        margin: 10,
        textAlign: "center"
    }
});