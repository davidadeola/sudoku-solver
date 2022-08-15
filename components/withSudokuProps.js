import { useState } from "react";
import getDeepCopy from "../utils/getDeepCopy";
import { getFormattedMatrix } from "../utils/sudokuLogic";

const withSudokuProps = (WrappedComponent) => {
  function NewComponent(props) {
    const sudokuScale = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const initialMatrixString =
      "050900000800040307000280190538607940020301000109804623907400000045000209000030070";
    const initialMatrixArray = getFormattedMatrix(initialMatrixString);
    const [sudokuMatrix, setSudokuMatrix] = useState(
      getDeepCopy(initialMatrixArray)
    );

    return (
      <>
        <WrappedComponent
          {...{
            sudokuScale,
            sudokuMatrix,
            setSudokuMatrix,
            initialMatrixArray,
            ...props,
          }}
        />
      </>
    );
  }
  return NewComponent;
};

export default withSudokuProps;
