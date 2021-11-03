import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image } from 'react-native';

import Product from '../../assets/product.jpg';

import api from '../services/api';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    api.get('/produtos').then(response => {
      const results = response.data;
      this.setState({
        products: results,
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
                data={this.state.products}
                renderItem={({ item }) => (
                  <View style={styles.containerProduct}>
                    <Image
                      style={styles.image}
                      source={Product} 
                    />
                    <Text style={styles.title}>Nome: {item.nome}</Text>
                    <Text style={styles.title}>Preço: {item.preco}</Text>
                    <Text style={styles.title}>Descrição: {item.descricao}</Text>
                  </View>
                )}
                keyExtractor={item => item.nome}
              />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    margin: 15,
  },
  containerProduct: {
    flex: 1,
    margin: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  containerView: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    margin: 2
  },
  image: {
    width: 145,
    height: 145,
    alignSelf: 'center'
  },
  error: {
    color: 'red',
    fontSize: 16,
    alignSelf: 'center'
  }
});