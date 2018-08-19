
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import firebase from 'firebase'
import '@firebase/firestore'
import '@firebase/auth'
import { Divider, Button } from 'react-native-paper'



export default class PaginaTeste extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ registros: [], registros2: [] });
  }




  consulta = () => {
    const dados = [];
    firebase.firestore().collection("cities").get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          const { country } = doc.data();
          dados.push({ country });
        });
        console.log('data: ', dados)
        this.setState({
          registros: dados
        });
      })
      .catch(error => {
        alert("erro ao receber dados x: ", error);
      });
  }

  consulta2 = () => {
    const dados2 = []
    firebase.firestore().collection("cidades").doc("br")
      .onSnapshot(function (doc) {
        console.log('xxx : ' + doc.data().name)
        const { name } = doc.data()
        dados2.push({ name });

        console.log('dados2!!! : ' + dados2[1].name)
      });

      //this.setState({ registros2: dados2 });

  }

  componentDidMount() {
    this.consulta();
    this.consulta2();
  };





  insere() {
    var db = firebase.firestore();
    var citiesRef = db.collection("cities");

    citiesRef.doc("SF").set({
      name: "San Francisco", state: "CA", country: "USA",
      capital: false, population: 860000
    });
    citiesRef.doc("LA").set({
      name: "Los Angeles", state: "CA", country: "USA",
      capital: false, population: 3900000
    });
    citiesRef.doc("DC").set({
      name: "Washington, D.C.", state: null, country: "USA",
      capital: true, population: 680000
    });
    citiesRef.doc("TOK").set({
      name: "Tokyo", state: null, country: "Japan",
      capital: true, population: 9000000
    });
    citiesRef.doc("BJ").set({
      name: "Beijing", state: null, country: "China",
      capital: true, population: 21500000
    });
  }

  render() {

    return (
      <View>
        <Text>teste!!</Text>
        <Text>aaaaa</Text>
        <Button raised onPress={() => { this.insere() }}>
          adicionar registros
        </Button>
        <FlatList
          data={this.state.registros}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Text>{item.country}</Text>
            )
          }}
        >
        </FlatList>

        <FlatList
          data={this.state.registros2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Text>{item.country}</Text>
            )
          }}
        >
        </FlatList>

      </View>
    )
  }
}