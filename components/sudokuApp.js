import { useState } from "react";
import styles from "../styles/sudoku.module.sass";
import getDeepCopy from "../utils/getDeepCopy";
import { getFormattedMatrix } from "../utils/sudokuLogic";
import Keyboard from "./keyboard";
import Header from "./header";
import DesktopButtons from "./desktopButtons";
import SudokuContainer from "./sudokuContainer";

const sudokuScale = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export default function SudokuApp() {
  const initialMatrixString =
    "050900000800040307000280190538607940020301000109804623907400000045000209000030070";
  const initialMatrixArray = getFormattedMatrix(initialMatrixString);
  const [sudokuMatrix, setSudokuMatrix] = useState(
    getDeepCopy(initialMatrixArray)
  );

  return (
    <div className={styles.container}>
      <Header {...{ initialMatrixArray, setSudokuMatrix }} />
      <SudokuContainer
        {...{
          sudokuScale,
          sudokuMatrix,
          setSudokuMatrix,
          initialMatrixArray,
        }}
      />
      <Keyboard
        {...{ sudokuScale, sudokuMatrix, setSudokuMatrix, initialMatrixArray }}
      />
      <DesktopButtons {...{ initialMatrixArray, setSudokuMatrix }} />
    </div>
  );
}
