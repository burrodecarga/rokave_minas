import * as React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gameReducer } from '../reducer/gameReducer';
import createBoard from '../utils/createBoard';
import Cell from './Cell';

const BOARD_SIZE = 10
const BOMB_NUM   = 10

export default function Board(){

  const [gameState, dispatch] = React.useReducer(gameReducer,{
   board:createBoard(BOARD_SIZE,BOARD_SIZE,BOMB_NUM),
   isGameOver:false,
   detonar:false,
   numOfOpenCells: 0,

  })

  function handlePress(row, col){
    dispatch({
      type:'HANDLE_CELL',row,col  })
  }

  function setInicio(){
    let row =BOARD_SIZE
    let col =BOARD_SIZE
    let bombs= BOMB_NUM
    dispatch({ type:'RELOAD',row,col, bombs})
  }

  const [sonido, SetSonido]= React.useState(null)

 

  if(gameState.isGameOver){
   
   
  }
  
  return <View style={styles.container}>
          <Text style={styles.text}>            
            {gameState.isGameOver ? 'DETONADO...':'Buscar Minas'}
            </Text>

            {
              gameState.isGameOver && (
              <View style={styles.btn}>
                <TouchableOpacity
                 onPress={setInicio}
                >
                  <Text style={styles.btnText}>Nuevo Juego</Text>
                  </TouchableOpacity>
              </View>)
            }



{
  gameState.board.map((row, rowIdx)=>(
    <View>
      <View key={rowIdx} style={styles.row}>
        {
          row.map((cell, cellIdx)=><Cell key={cellIdx+'-'+rowIdx+Math.random()} {...cell} handlePress={handlePress}/>)
        }
      </View>
    </View>
  ))
}
  </View>
} 

const styles = StyleSheet.create({
  container:{
    height:'100%' ,
    alignItems:'center',
    justifyContent:'center'
  },
  row:{
    flexDirection:'row'
  },
  text:{
    fontWeight:'900',
    fontSize:30,
    marginVertical:5
  },
  btn:{
    backgroundColor:'blue',
    paddingHorizontal:10,
    paddingVertical:8,
    marginVertical:10,
    borderRadius:10
  },
  btnText:{
    color:'#fff',
    fontSize:16

  }
})