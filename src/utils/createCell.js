export function creteCell(row, col){
  return(
    {
      row,
      col,
      isFlipped: false,
      isBomb:false,
      value:0,
    }
  )

}