import React,{useState} from 'react';
import {View,TextInput,Text,StyleSheet} from 'react-native';

import Container from './components/Container.js' 
import Container1 from './components/Container1.js' 

const App = () => {
  return (
    <>
    <View style={styles.Main}>
      <Text>Welcome to the Weather App</Text>
    </View>
    
    {/* <Container/> */}
    <Container1/>
   </>
  );
};

const styles = StyleSheet.create({
  Main:{
    padding:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'cornflowerblue',
    fontFamily:'Gothic',
    height:57,
  },
})
export default App;
