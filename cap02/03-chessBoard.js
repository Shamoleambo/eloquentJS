const createChessBoard = () => {
  let chessBoard = ''
  for (let n = 1; n <= 8; n++) {
    for (let m = 1; m <= 8; m++) {
      if (n % 2 === 0) m % 2 === 0 ? (chessBoard += '#') : (chessBoard += ' ')
      else m % 2 === 0 ? (chessBoard += ' ') : (chessBoard += '#')
    }
    chessBoard += '\n'
  }

  return chessBoard
}

console.log(createChessBoard())
