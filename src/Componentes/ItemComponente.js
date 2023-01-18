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

export default class ItemComponente extends Component {

    alteraCorestoqueBaixo() {
        if (this.props.quantidade < 10) {
            return { color: 'red' }
        } else {
            return { color: 'black' }
        }
    }

    render() {
        return (

            <View>
                <View style={estilo.titulo}>

                    <Text style={estilo.lista}>Nome: {this.props.nome}</Text>
                    <Text style={estilo.lista}>Preço: {this.props.preco}</Text>
                    <Text style={this.alteraCorestoqueBaixo()}>Quantidade: {this.props.quantidade}</Text>
                </View>
                <View style={estilo.corpo}>
                    <TouchableOpacity
                        onPress={() => this.props.atualizar(this.props.item)}
                        style={estilo.botao}>

                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Vendido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.remover(this.props.id)}
                        style={estilo.botao}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, }}>Remover</Text>
                    </TouchableOpacity>
                </View>
            </View >

        )
    }
}

const estilo = StyleSheet.create({
    titulo: {
        fontSize: 20,
        margin: 10,
        alignContent: 'center',
        justifyContent: 'center',

    },

    lista: {
        marginLeft: 2,
        color: 'black',
        margin: 3,
        fontWeight: ' bold',
        



    },

    corpo: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        color: 'black',

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



