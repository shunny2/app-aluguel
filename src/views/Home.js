import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import api from '../services/api';

function Home() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Catalogo de Produtos</Text>
      </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 28,
        alignSelf: "center",
        margin: 20
    },
});