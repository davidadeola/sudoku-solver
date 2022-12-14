import { Refresh, Write } from "../assets/icons/icons";
import styles from "../styles/sudoku.module.sass";
import { resetSudoku } from "../utils/sudokuLogic";

function Header({
  initialMatrixArray,
  setSudokuMatrix,
  setFormIsVisible,
  formIsVisible,
}) {
  return (
    <div className={styles.header + " " + styles.restrictor}>
      <h2>Sudoku Solver</h2>
      <button
        className={styles.button}
        onClick={() => setFormIsVisible(!formIsVisible)}
      >
        <Write width="24" height="24" fill="#FF7F00" />
      </button>
      <button
        className={styles.button}
        onClick={() => resetSudoku(initialMatrixArray, setSudokuMatrix)}
      >
        <Refresh width="24" height="24" fill="#FF7F00" />
      </button>
    </div>
  );
}

export default Header;
