import React, { Component } from 'react';
import { View } from 'react-native';
import Routes from './Routes';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';

const App = () => {
  return (
      <View>
          <Header /> 
          <Tabs /> 
          <View style={{backgroundColor: '#dad8d8'}}>
              <Routes />
          </View>  
      </View>
  );
}

export default App;