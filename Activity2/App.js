import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';



const App = () => 
  (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.bold}>Clarence </Text>
        <Text style={styles.italicText}>Cerco</Text>
      </Text>
      
    </SafeAreaView>
    </SafeAreaProvider>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'lightgreen',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bold:{
   
     fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  }
});
export default App;