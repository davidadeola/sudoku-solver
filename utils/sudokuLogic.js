// check SUDOKU!
const compareSudokus = (currentSudoku, solvedSudoku) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.getElementById(`cellInput${i}${j}`);
      if (currentSudoku[i][j] !== solvedSudoku[i][j]) {
        if (currentSudoku[i][j] !== 0) {
          cell.style.backgroundColor = "#663333"; // Wrong input
        } else {
          cell.style.backgroundColor = "#363872aa";
        }
      }
    }
  }
};

// SOLVE SUDOKU!
const checkRow = (grid, row, num) => grid[row].indexOf(num) === -1;

const checkCol = (grid, col, num) =>
  grid.map((row) => row[col]).indexOf(num) === -1;

const checkBox = (grid, row, col, num) => {
  let boxArr = [],
    rowStart = row - (row % 3),
    colStart = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      boxArr.push(grid[rowStart + i][colStart + j]);
    }
  }

  return boxArr.indexOf(num) === -1;
};

const checkNumValidity = (grid, row, col, num) => {
  const isUniqueInRow = checkRow(grid, row, num);
  const isUniqueInCol = checkCol(grid, col, num);
  const isUniqueInBox = checkBox(grid, row, col, num);
  if (isUniqueInRow && isUniqueInCol && isUniqueInBox) {
    return true;
  }
  return false;
};

const getNextCell = (row, col) => {
  return col !== 8 ? [row, col + 1] : row !== 8 ? [row + 1, 0] : [0, 0];
};

const solve = (grid, row = 0, col = 0) => {
  if (grid[row][col] !== 0) {
    let isLast = row >= 8 && col >= 8;
    if (isLast) return;

    let [newRow, newCol] = getNextCell(row, col);
    return solve(grid, newRow, newCol);
  }
  for (let num = 1; num <= 9; num++) {
    const numIsValid = checkNumValidity(grid, row, col, num);
    if (numIsValid) {
      grid[row][col] = num;
      let [newRow, newCol] = getNextCell(row, col);

      if (!newRow && !newCol) {
        return true;
      }
      if (solve(grid, newRow, newCol)) {
        return true;
      }
    }
  }

  grid[row][col] = 0;
  return false;
};

const getFormattedMatrix = (rawMatrix) => {
  const matrixArray = rawMatrix.split("").map((num) => parseInt(num));

  let motherArr = [];

  while (matrixArray.length) {
    motherArr.push(matrixArray.splice(0, 9));
  }

  return motherArr;
};

export { compareSudokus, solve, getFormattedMatrix };
