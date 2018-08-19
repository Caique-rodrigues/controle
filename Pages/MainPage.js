import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Divider, Button } from 'react-native-paper'
import PaginaTeste from './PaginaTeste';

export default class MainPage extends Component {
  render() {
    return (
      <View>
        <Text >Welcome to React Native! pagina principal</Text>
        <Divider />
        <Button raised onPress={() => this.props.navigation.navigate('PagTeste')}>
          Press me
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({

});
