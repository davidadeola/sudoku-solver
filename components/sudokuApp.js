import { useState, useEffect } from "react";
import styles from "../styles/sudoku.module.sass";
import getDeepCopy from "../utils/getDeepCopy";
import { getFormattedMatrix } from "../utils/sudokuLogic";
import Keyboard from "./keyboard";
import Header from "./header";
import DesktopButtons from "./desktopButtons";
import SudokuContainer from "./sudokuContainer";
import SudokuInput from "./sudokuInput";
import getRandomIndex from "../utils/getRandomArrayIndex";

//
const sudokuScale = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const possibleSudokuMatrixes = [
  "401090602300100954695000087100053020850071003000208010209807040000360000734000060",
  "050900000800040307000280190538607940020301000109804623907400000045000209000030070",
  "005009000070080042300002159000208300051003007200700004900000001042000000000000030",
  "094000830002306740057280100200400000501760429000928060130000980046831050008000000",
  "000007008006000000509020070080010000105900003060000050207090080000300400010000000",
  "704000600000032740000060350006070430801300070000250001060007000002000000107083000",
  "003004502050003000008005360000200743270300080340750000005400006902000050400002900",
  "390005804060900070100040030705030102080002400003058007008070010500206008020001060",
  "039208715608001000050930846704010058810640370020805104503090021041503007900120580",
  "052006000160900004049803620400000800083201590001000002097305240200009056000100970",
  // "107420090400000002050700103900050060040806020305000010200013006003090070600008405"
];

export default function SudokuApp() {
  const [initialMatrixString, setInitialMatrixString] = useState(
    possibleSudokuMatrixes[0]
  );
  const [initialMatrixArray, setInitialMatrixArray] = useState(
    getFormattedMatrix(initialMatrixString)
  );
  const [sudokuMatrix, setSudokuMatrix] = useState(
    getDeepCopy(initialMatrixArray)
  );
  const [formIsVisible, setFormIsVisible] = useState(false);

  useEffect(() => {
    const randomSudokuMatrix = getRandomIndex(possibleSudokuMatrixes);
    setInitialMatrixString(randomSudokuMatrix);
  }, []);

  useEffect(() => {
    setInitialMatrixArray(getFormattedMatrix(initialMatrixString));
  }, [initialMatrixString]);

  useEffect(() => {
    setSudokuMatrix(getDeepCopy(initialMatrixArray));
  }, [initialMatrixArray]);

  return (
    <div className={styles.container}>
      <Header
        {...{
          initialMatrixArray,
          setSudokuMatrix,
          setFormIsVisible,
          formIsVisible,
        }}
      />
      <SudokuInput
        {...{ formIsVisible, setInitialMatrixString, initialMatrixString }}
      />
      <SudokuContainer
        {...{
          sudokuScale,
          sudokuMatrix,
          setSudokuMatrix,
          initialMatrixArray,
        }}
      />
      <Keyboard
        {...{
          sudokuScale,
          sudokuMatrix,
          setSudokuMatrix,
          initialMatrixArray,
          setFormIsVisible,
        }}
      />
      <DesktopButtons
        {...{
          initialMatrixArray,
          setSudokuMatrix,
        }}
      />
    </div>
  );
}
