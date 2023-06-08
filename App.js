import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
//import { Button } from 'react-native-web';

export default function App() {
  const [count,setCunter]= useState(0);
  function increment(){
    let result =count + 1;
    setCunter(result);
  }

  function decrement(){
    let result = count - 1;
    setCunter(result);
  }

  function reset(){
    let result =0;
    setCunter(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgalom</Text>
      <Text style={styles.text}>számláló</Text>
      <Text style={styles.count}>{count}</Text>

      <Button title='Növel' 
      onPress={increment}  />

      <Button title='Csökkent' 
      onPress={decrement}  />

      <Button title='Reset' 
      onPress={reset}  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'coral',
    fontSize:32,
    fontFamily:'monospace',
  },
  count:{
    fontSize:44,
    color:'violet'
  },
});
