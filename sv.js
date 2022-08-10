const QueenAttack = ({ white, black }) => {
    const BOARD_SIZE = 7;
    const checkDiagonal = () => {
      if (
        white[0] - white[1] === black[0] - black[1] ||
        white[0] + white[1] === black[0] + black[1]
      )
        return true;
    };
  
    const checkVertical = () => {
      if (white[0] === black[0]) return true;
    };
  
    const checkHorizontal = () => {
      if (white[1] === black[1]) return true;
    };
  
    if (
      (checkDiagonal() || checkHorizontal() || checkVertical()) &&
      white[0] <= BOARD_SIZE &&
      white[1] <= BOARD_SIZE &&
      black[0] <= BOARD_SIZE &&
      black[1] <= BOARD_SIZE
    )
      return true;
    else return false;
  };
  
  const white = [9, 9];
  const black = [7, 7];
  console.log(QueenAttack({ white, black }));
  