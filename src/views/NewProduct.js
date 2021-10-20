import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, TouchableOpacity, ScrollView, Platform, Image} from 'react-native';
// import Product from '../../assets/baixados.jpg';
import { CheckBox } from 'react-native-elements'

export default class NewProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: "",
            size: "",
            description: "",
            quantity: "",
            category: "",
            price: "",
            checked: Boolean,
            rentPrice: "",
        };
    }
    
  

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.background}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.containerLogo}>
                        <Image
                            style={{
                                width: 145,
                                height: 145
                            }}
                       />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text}>Nome do Produto</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ productName: text }) }}
                            value={this.state.productName} />

                        <Text style={styles.text}>Tamanho</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ size: text }) }}
                            value={this.state.size} />

                        <Text style={styles.text}>Sobre o Produto</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ description: text }) }}
                            value={this.state.description} />
                        <Text style={styles.text}>Quantidade</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ quantity: text }) }}
                            value={this.state.quantity} />
                        <Text style={styles.text}>Categoria</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ category: text }) }}
                            value={this.state.category} />
                        <Text style={styles.text}>Valor</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ price: text }) }}
                            value={this.state.price} />
                        <CheckBox
                            title='Disponivel para aluguel?'
                            checked={this.state.checked}
                            checkedColor='black'
                            onPress={() => this.setState({ checked: !this.state.checked })}
                        />
                        <Text style={styles.text}>Valor de Aluguel</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => { this.setState({ rentPrice: text }) }}
                            value={this.state.rentPrice} />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 15
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: 5
    },
    input: {
        backgroundColor: '#E5E5E5',
        width: 227,
        height: 37,
        marginBottom: 5,
        color: '#222',
        fontSize: 20,
        borderRadius: 10,
        padding: 7,
    },
    text: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'Roboto',
        padding: 3,
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    checkbox: {
        alignSelf: "center",
	},
});