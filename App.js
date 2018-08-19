import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {Divider} from 'react-native-paper'
import { createStackNavigator } from 'react-navigation';

//------------  PAGINAS IMPORT ------------------//
import MainPage from './Pages/MainPage'
import PaginaTeste from './Pages/PaginaTeste'
//-----------------------------------------------//
//
//------------  FIREBASE IMPORT -----------------//
import firebase from 'firebase'
import '@firebase/firestore'
import '@firebase/auth'
//-----------------------------------------------//














export default class App extends Component {

  componentWillMount() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCDzH4DJJF7_bft97cD517foxAa3zdrZcA",
      authDomain: "configuracaofirebasereac-e4f5f.firebaseapp.com",
      databaseURL: "https://configuracaofirebasereac-e4f5f.firebaseio.com",
      projectId: "configuracaofirebasereac-e4f5f",
      storageBucket: "configuracaofirebasereac-e4f5f.appspot.com",
      messagingSenderId: "73339527767"
    };
    firebase.initializeApp(config);

    const firestore = firebase.firestore()
    const settings = { timestampsInSnapshots: true };
    firestore.settings(settings);

  }


  render() {
    return (
      <PaperProvider >
        <RootStack />
      </PaperProvider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Inicio: MainPage,
    PagTeste: PaginaTeste
  },
  {
    initialRouteName: 'Inicio',
  }
);

const styles = StyleSheet.create({

});
