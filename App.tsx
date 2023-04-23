import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Board from './src/components/Board';
import Cell from './src/components/Cell';

const App = () => {
  const [inicio, setInicio] =useState(false)
  useEffect(()=>{
    console.log(`Innicio: ${inicio}`)
  },[inicio])
  return (
    <SafeAreaView style={styles.container}>
     <Board/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
   
  },
 
});

export default App;
