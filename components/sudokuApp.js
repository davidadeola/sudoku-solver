import { useState } from "react";
import styles from "../styles/sudoku.module.sass";
import { Delete, Refresh, Solve as SolveIcon } from "../assets/icons/icons";
import getDeepCopy from "../utils/getDeepCopy";
import {
  compareSudokus,
  solve,
  getFormattedMatrix,
} from "../utils/sudokuLogic";

const sudokuScale = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function SudokuContainer() {
  const initialMatrixString =
    "050900000800040307000280190538607940020301000109804623907400000045000209000030070";
  const initialMatrixArray = getFormattedMatrix(initialMatrixString);
  const [sudokuMatrix, setSudokuMatrix] = useState(
    getDeepCopy(initialMatrixArray)
  );
  const [inputValue, setInputValue] = useState(initialMatrixString);

  const checkSudoku = (newSudokuMatrix) => {
    const currentSudokuMatrix = getDeepCopy(sudokuMatrix);
    solve(currentSudokuMatrix);
    compareSudokus(newSudokuMatrix, currentSudokuMatrix);
  };

  const solveSudoku = () => {
    const currentSudokuMatrix = getDeepCopy(initialMatrixArray);
    solve(currentSudokuMatrix);
    setSudokuMatrix(currentSudokuMatrix);
    document
      .querySelectorAll("input.cellInput")
      .forEach((e) => (e.style.backgroundColor = "#363872"));
  };

  const resetSudoku = () => {
    const initialMatrix = getDeepCopy(initialMatrixArray);
    setSudokuMatrix(initialMatrix);
    document
      .querySelectorAll("input.cellInput")
      .forEach((e) => (e.style.backgroundColor = "#363872aa"));
  };

  const handleInputChanges = (e, row, col) => {
    e.target.style.backgroundColor = "#363872";
    const val = parseInt(e.target.value) || 0;
    const newSudokuMatrix = getDeepCopy(sudokuMatrix);
    if (val === 0 || (val >= 1 && val <= 9)) {
      newSudokuMatrix[row][col] = val;
    }
    setSudokuMatrix(() => newSudokuMatrix);
    checkSudoku(newSudokuMatrix);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header + " " + styles.restrictor}>
        <h2>Sudoku Solver</h2>
        <button className={styles.button} onClick={resetSudoku}>
          <Refresh width="24" height="24" fill="#fff" />
        </button>
      </div>
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
                        sudokuMatrix[row][col] === 0
                          ? ""
                          : sudokuMatrix[row][col]
                      }
                      data-key={`${row}${col}`}
                      onChange={(e) => handleInputChanges(e, row, col)}
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
      <div className={styles.keyboard}>
        <div className={styles.keys}>
          {sudokuScale.map((item, index) => (
            <button
              key={item}
              className={styles.numKeys}
              onMouseDown={(e) => {
                e.preventDefault();
                const input = document.activeElement;
                const [row, col] = input.dataset.key.split("");
                const newSudokuMatrix = getDeepCopy(sudokuMatrix);

                newSudokuMatrix[row][col] = index + 1;
                setSudokuMatrix(newSudokuMatrix);
                checkSudoku(newSudokuMatrix);
              }}
              tabIndex={-1}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              const input = document.activeElement;
              if (!input.dataset.key) return;
              const [row, col] = input.dataset.key.split("");
              const newSudokuMatrix = getDeepCopy(sudokuMatrix);

              newSudokuMatrix[row][col] = 0;
              setSudokuMatrix(newSudokuMatrix);
              checkSudoku(newSudokuMatrix);
            }}
          >
            <Delete width={28} height={28} fill="#fff" />
          </button>
          <button onClick={solveSudoku}>
            <SolveIcon width={28} height={28} fill="#fff" />
          </button>
        </div>
      </div>
      <div className={styles.buttonContainerDesktop}>
        <button className={styles.keyboardButton} onClick={solveSudoku}>
          <SolveIcon width={64} height={64} fill="#fff" />
        </button>
        <button className={styles.keyboardButton} onClick={resetSudoku}>
          <Refresh width={64} height={64} fill="#fff" />
        </button>
      </div>
    </div>
  );
}
