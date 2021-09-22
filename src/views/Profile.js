import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function Profile() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Perfil do Usuário</Text>
      </View>
    );
}

export default Profile;

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