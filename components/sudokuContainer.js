import styles from "../styles/sudoku.module.sass";

function SudokuContainer({
  sudokuScale,
  sudokuMatrix,
  setSudokuMatrix,
  initialMatrixArray,
}) {
  const handleInputChanges = (event, row, col) => {
    event.target.style.backgroundColor = "#363872";
    const val = parseInt(event.target.value) || 0;
    const newSudokuMatrix = getDeepCopy(sudokuMatrix);
    if (val === 0 || (val >= 1 && val <= 9)) {
      newSudokuMatrix[row][col] = val;
    }
    setSudokuMatrix(() => newSudokuMatrix);
    checkSudoku(newSudokuMatrix, sudokuMatrix);
  };

  return (
    <div className={styles.tableBody + " " + styles.restrictor}>
      {sudokuScale.map((row, rowIndex) => {
        return (
          <div
            className={
              styles.tableRow +
              " " +
              ((row + 1) % 3 === 0 || row === 0 ? styles.rowBorder : "")
            }
            key={rowIndex}
          >
            {sudokuScale.map((col, colIndex) => {
              return (
                <div
                  className={
                    styles.cell +
                    " " +
                    ((col + 1) % 3 === 0 || col === 0 ? styles.colBorder : "")
                  }
                  key={rowIndex + colIndex}
                >
                  <input
                    value={
                      sudokuMatrix[row][col] === 0 ? "" : sudokuMatrix[row][col]
                    }
                    data-key={`${row}${col}`}
                    onChange={(e) => handleInputChanges(e, row, col)}
                    inputMode="none"
                    className={"cellInput" + " " + styles.cellInput}
                    id={`cellInput${row}${col}`}
                    disabled={initialMatrixArray[row][col] !== 0}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SudokuContainer;
