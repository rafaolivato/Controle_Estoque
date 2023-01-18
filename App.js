import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Item from './src/Models/Item';
import ItemComponente from './src/Componentes/ItemComponente';
import ItemDatabase from './src/Database/ItemDatabase';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      preco: 0.0,
      quantidade: 0,
      lista: [],

    }
    this.Listar();
  }

  Listar = () => {
    const banco = new ItemDatabase();
    banco.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })
      }
    )


  }

  Cadastrar = (nome, preco, quantidade) => {
    const itemNovo = new Item(nome, preco, quantidade);
    const banco = new ItemDatabase();
    banco.Inserir(itemNovo);
    this.Listar();

  }

  Atualizar = (item) => {
    const banco = new ItemDatabase();
    banco.Atualizar(item);
    this.Listar();
  }

  Remover = (id) => {
    const banco = new ItemDatabase();
    banco.Remover(id);
    this.Listar();

  }

  

  render() {
    return (
      <ScrollView>
        <View style={estilo.corpo}>
          <Text style={estilo.titulo}>Controle de Estoque</Text>
          <TextInput placeholder=' Digite o nome do produto' onChangeText={(valorDigitado) => { this.setState({ nome: valorDigitado }) }} style={estilo.input}></TextInput>
          <TextInput placeholder= ' Digite o preço do produto. Ex: 10.22' onChangeText={(valorDigitado) => { this.setState({ preco: valorDigitado }) }} style={estilo.input}></TextInput>
          <TextInput placeholder= ' Digite a quantidade do produto' onChangeText={(valorDigitado) => { this.setState({ quantidade: valorDigitado }) }} style={estilo.input}></TextInput>
        </View>
        <View style={estilo.corpo}>
          <TouchableOpacity
            onPress={() => this.Cadastrar(this.state.nome, this.state.preco, this.state.quantidade)}
            style={estilo.botao}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Salvar</Text>
          </TouchableOpacity>
        </View>

        {/*Lista de items*/}

        <View style={estilo.corpo}>

          <Text style={estilo.titulo}>Lista de Itens</Text>
          {
            this.state.lista.map(elementoLista => (
              <ItemComponente

                id={elementoLista.id}
                nome={elementoLista.nome}
                preco={elementoLista.preco}
                quantidade={elementoLista.quantidade}
                item={elementoLista}
               
                atualizar={this.Atualizar}
                remover={this.Remover} />


            ))
          }


        </View>
      </ScrollView >

    )
  }
}

const estilo = StyleSheet.create({
  titulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    margin: 10,
    color: 'black',
    fontWeight: 'bold'

  },

  input: {

    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    height: 50,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue'

  },

  corpo: {
    alignItems: 'center',
    justifyContent: 'center',

  },

  botao: {
    height: 30,
    width: 150,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',



  }

}
)



