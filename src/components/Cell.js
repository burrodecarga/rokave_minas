import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

function Cell({ row, col, isFlipped, isBomb, value, handlePress }) {
  return <Pressable
   onPress={()=>handlePress(row,col)}
   style={[styles.container, !isFlipped && styles.isFlipped]}>
    <Text style={styles.text}>
    {isFlipped && (isBomb ? '💣' : value > 0 && value)}
    </Text>
  </Pressable>
}

const styles = StyleSheet.create({
  container:{
   alignContent:'center',
   alignItems:'center',
   width:34,
   height:34,
   borderWidth:1,
   borderColor:'gray'   
  },
  isFlipped:{
   backgroundColor:'#90ddeb',
  },
  text:{
    fontSize:22,
    fontWeight:'800',
    color:'black'

  }
})
export default Cell
