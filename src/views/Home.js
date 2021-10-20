import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import api from '../services/api';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products:[],
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    api.get('/produtos').then(response => {
      const results = response.data;
      this.setState({
        products:results,
        loading:false,
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
          ? <ActivityIndicator size="large" color="#0000ff"/>
          : this.state.error
            ? <Text style={styles.error}>Ops... Algo deu errado :(</Text>
            : <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.container}
              data={this.state.products}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <Text style={styles.title}>Identificador: {item.id}</Text>
                  <Text style={styles.title}>Nome: {item.nome}</Text>
                  <Text style={styles.title}>Preço: {item.preco}</Text>
                  <Text style={styles.title}>Categoria: {item.categoria}</Text>
                  <Text style={styles.title}>Descrição: {item.descricao}</Text>
                  <Text style={styles.title}>Medida: {item.medida}</Text>
                  <Text style={styles.title}>Estoque: {item.estoque}</Text>
                </View>
              )}
              keyExtractor = { item => item.nome }
            />
        }
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  container: {
    flex: 1,
    margin: 15
  },
  containerView: {
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    alignSelf: "center",
    margin: 2
  },
  error:{
    color:'red',
    fontSize:16,
    alignSelf:'center'
  }
});