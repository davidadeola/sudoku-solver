import { useState } from "react";
import { RightArrow } from "../assets/icons/icons";
import styles from "../styles/sudoku.module.sass";
import LoudIt from "../utils/loudIt";

export default function SudokuInput({
  formIsVisible,
  setInitialMatrixString,
  initialMatrixString,
}) {
  const [inputValue, setInputValue] = useState(initialMatrixString);
  const handleMatrixUpdate = (elemValue) => {
    if (elemValue.length === 81) {
      setInitialMatrixString(elemValue);
    } else {
      LoudIt("String should contain 81 characters", {
        background: "#f22c",
        width: "18em",
        fontSize: "1em",
        opacity: 0.8,
        padding: ".7em",
      });
    }
  };

  return (
    <>
      {formIsVisible ? (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleMatrixUpdate(e.target.children[0].value);
          }}
        >
          <input
            type="text"
            value={inputValue}
            className={styles.sudokuInput}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.which === 13) {
                handleMatrixUpdate(e.target.value);
              }
            }}
          />
          <button type="submit">
            <RightArrow width={24} height={24} />
          </button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}
