import { Delete, Solve as SolveIcon } from "../assets/icons/icons";
import styles from "../styles/sudoku.module.sass";
import getDeepCopy from "../utils/getDeepCopy";
import { checkSudoku, solveSudoku } from "../utils/sudokuLogic";

function Keyboard({
  sudokuScale,
  sudokuMatrix,
  setSudokuMatrix,
  initialMatrixArray,
  setFormIsVisible,
}) {
  return (
    <div className={styles.keyboard}>
      <div className={styles.keys}>
        {sudokuScale.map((item, index) => (
          <button
            key={item}
            className={styles.numKeys}
            onMouseDown={(e) => {
              e.preventDefault();
              const input = document.activeElement;
              if (parseInt(input.value)) return;
              if (!input.dataset.key) return;
              const [row, col] = input.dataset.key
                .split("")
                .map((num) => parseInt(num));
              const newSudokuMatrix = getDeepCopy(sudokuMatrix);

              newSudokuMatrix[row][col] = index + 1;
              setSudokuMatrix(newSudokuMatrix);
              checkSudoku(newSudokuMatrix, sudokuMatrix);
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
            const [row, col] = input.dataset.key
              .split("")
              .map((num) => parseInt(num));
            const newSudokuMatrix = getDeepCopy(sudokuMatrix);

            newSudokuMatrix[row][col] = 0;
            setSudokuMatrix(newSudokuMatrix);
            checkSudoku(newSudokuMatrix, sudokuMatrix);
          }}
        >
          <Delete width={28} height={28} fill="#fff" />
        </button>
        <button
          onClick={() => {
            solveSudoku(initialMatrixArray, setSudokuMatrix);
            setFormIsVisible(false);
          }}
        >
          <SolveIcon width={28} height={28} fill="#fff" />
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
