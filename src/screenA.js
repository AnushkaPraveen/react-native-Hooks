import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button,Alert} from 'react-native';

const ScreenA = () => {
  const [count, setCount] = useState(0);
  const [number, SetNumber] = useState(0);

  useEffect(() => {
    console.log('Run on Every render');
    Alert.alert(
        "useEffect Alert",
        "useEffect Run on Every render",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  });


  useEffect(() => {
    console.log('Runs only on the first render');
    Alert.alert(
        "useEffect Alert",
        "useEffect Runs only on the first render",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  },[]);


  useEffect(() => {
    console.log('Runs on the first render and any time any dependency value changes');
    Alert.alert(
        "useEffect Alert",
        "useEffect Runs on the first render and any time any dependency value changes",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  },[count]);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Count : {count}</Text>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={() => {
            setCount(count - 1);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Test"
          onPress={()=>{SetNumber(number+10)}}
         
        />
      </View>
      <Text>{number}</Text>
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

export default ScreenA;
