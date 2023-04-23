import createBoard, { getNeighbors } from '../utils/createBoard';
import ReactHowler from 'react-howler'

export function gameReducer(state, actions){
  const {type, row, col, bombs} = actions
  switch (type){
    case 'RELOAD':{
      return{
        board:createBoard(row,col,bombs),
        isGameOver:false,
        detonar:false
      }
    }
    case 'HANDLE_CELL':{
      if(state.board[row][col].isBomb){
        return {
          ...state,
          board: flipAll(state.board),
          isGameOver: true,
          detonar:true
        }
      }else if(state.board[row][col].value ===0){
        return {
          ...state,
          board:expand(row, col, state.board)
        }
      }else{

        return{
          ...state,
          board:flipCell(row,col, state.board)
        }
      }
    }
    default:{
      console.log('Error BDC  Acción desconocida');
    }
  }
}

function flipCell(row, col, board){
  const newBoard = board.slice()
  const cell = newBoard[row][col]
  const newCell = {
    ...cell,
    isFlipped: true
  }

  newBoard[row][col] = newCell
  return newBoard
}

function expand(row, col, board){
  const newBoard = board.slice()
  const stack = [[row, col]]
  while(stack.length > 0){
    const [row, col] = stack.pop()
    const neighbors = getNeighbors(row, col, newBoard)

    for(const neighbor of neighbors){
      const [col,row] = neighbor
      if(newBoard[row][col].isFlipped) continue
      if(!newBoard[row][col].isBomb){
        newBoard[row][col].isFlipped = true
        if(newBoard[row][col].value >0){
          continue
        }
        stack.push(neighbor)
      }     
    }
  }
return newBoard
}

function flipAll(board){
 const newBoard = board.slice()
 for (let row = 0; row < board.length; row++){
  for(let col = 0; col < board[row].length; col++){
    const cell = newBoard[row][col]
    const newCell = {
      ...cell,
      isFlipped: true
    }
    newBoard[row][col] = newCell
  }
 }
 return newBoard
}

function numOfOpenCells(board) {
  let total = 0;

  for (let row = 0; row < newBoard.length; row++) {
    for (let col = 0; col < newBoard[row].length; col++) {
      if (board[row][col].isFlipped) {
        total++;
      }
    }
  }
  return total;
}
