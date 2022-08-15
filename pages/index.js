import Head from "next/head";
import SudokuApp from "../components/sudokuApp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sudoku Solver</title>
        <meta name="description" content="A sudoku solver" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SudokuApp />
    </>
  );
}
