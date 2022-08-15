import { Refresh, Solve as SolveIcon } from "../assets/icons/icons";
import styles from "../styles/sudoku.module.sass";
import { resetSudoku, solveSudoku } from "../utils/sudokuLogic";

export default function DesktopButtons({
  initialMatrixArray,
  setSudokuMatrix,
}) {
  return (
    <div className={styles.buttonContainerDesktop}>
      <button
        className={styles.keyboardButton}
        onClick={() => solveSudoku(initialMatrixArray, setSudokuMatrix)}
      >
        <SolveIcon width={64} height={64} fill="#3B8C57" />
      </button>
      <button
        className={styles.keyboardButton}
        onClick={() => resetSudoku(initialMatrixArray, setSudokuMatrix)}
      >
        <Refresh width={64} height={64} fill="#FF7F00" />
      </button>
    </div>
  );
}
