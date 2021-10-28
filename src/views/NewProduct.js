import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Text, ScrollView, Platform, Image } from 'react-native';
import Product from '../../assets/product.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AuthContext } from '../providers/auth';

import api from '../services/api';

export default class NewProduct extends React.Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            user_id: "",
            productName: "",
            size: "",
            description: "",
            quantity: "",
            category: "",
            price: "",
            checked: Boolean,
            rentPrice: "",
            errorCreateNewProduct: ""
        };
    }

    componentDidMount() {
        const { user } = this.context;
        this.setState({ user_id: user.user_id });
    }

    render() {

        const CreateNewProduct = async () => {

            if (this.state.productName != '' && this.state.size != '' && this.description != '' && this.quantity != '' && this.category != '' && this.price != '') {
                try {
                    const response = await api.post('/produtos/create', {
                        usuario_id: this.state.user_id,
                        nome: this.state.productName,
                        preco: this.state.price,
                        estoque: this.state.quantity,
                        medida: this.state.size,
                        valor_aluguel: this.state.rentPrice,
                        categoria: this.state.category,
                        disponivel: this.state.checked,
                        descricao: this.state.description
                    });

                    //await AsyncStorage.setItem('@AirBnbApp:token', response.data.token);

                    this.props.navigation.push('DrawerScreens', { screen: 'Home' });

                    console.log(response.data);

                    return response.data;

                } catch (error) {
                    console.log('Request Error:', error);
                }
            } else {
                this.setState({ errorCreateNewProduct: true });
            }
        }

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
                            source={Product}
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
                        {this.state.errorCreateNewProduct == true
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
                        <TouchableOpacity
                            style={styles.btnSubmit}
                            onPress={CreateNewProduct}>
                            <Text style={styles.submitTxt}>Salvar</Text>
                        </TouchableOpacity>
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
    btnSubmit: {
        backgroundColor: '#FFF',
        width: 170,
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 5
    },
    submitTxt: {
        color: '#000',
        fontSize: 24,
        fontFamily: 'Roboto'
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
    checkbox: {
        alignSelf: "center",
    },
});