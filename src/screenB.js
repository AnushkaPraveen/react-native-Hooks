import React, {useEffect, useState,useContext,createContext} from 'react';
import {StyleSheet, Text, View, Button,Alert} from 'react-native';


const Context = createContext('Default Value in Context');




function Main() {
    const value = 'My Context Value';
    return (
      <Context.Provider value={value}>
        <ScreenB/>
      </Context.Provider>
    );
  }





const ScreenB = () => {
  const value = useContext(Context);
  return (
    <View style={styles.body}>
      <Text>{value}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 50,
  },
  button: {
    margin: 20,
  },
});

export default ScreenB;
