## Getting Started

## Project Title: Sudoku Solver.

This is a Sudoku Solver, that helps you solve hard Sudoku puzzles, with a few simple steps you will be able to effectively solve any Sudoku.

## Project Description:

With this App, you will be able to solve puzzles in different ways.
For instance, if you are stuck in solving a particular value, with this app you will be able to get the correct value for the input you got stuck at.
Also, Just in case you just want to quickly solve the entire puzzle, with this App you will be able to get all the values all at once.
Furthermore, you have the ability to pass in unsolved sudoku.

With the Code, you can also store your Sudoku Array values, this means the code is structured in such a way that, even if you add new array values or change existing values the code doesn't break.
However, you should only include real sudoku puzzle values, and not formulated values, as you won't get an answer for that.

## Reason for Technologies

I used Reactjs, with Nextjs as the Framework to build this Application, and this is because of the tooling options React brings for state management, as well as the Wrapping feature, suggestions, and Server side rendering (for SEO) that Nextjs brings.
Moreover, I used SASS, for styling it's lighter and very powerful to use, especially when you use it as a module ("style.module.sass"). Also used regular CSS for the global styling.

## Challengies faced

I faced some difficulties, in keeping the Logic for handling the input Array together to work with the Solver.
But I was able to utilize React Hooks and Prop drilling to keep the code consistent.
While building this app, I had an initial intent of just making it a simple solver, but during development, it become more interesting, I began to add more features to make it more interactive for the end user.
I intend on doing more research on how to improve the code base.

## Table of Contents:

- How to install and run the project:
- How to use the Project:
- How to Build the Project:
- License

## How to install and run the project:

First, run the development server:

```bash
npm install
```

Use the code editor of your choice (VSCode my choice) to install all the package dependencies.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use the Project

The Opened app should look like this:
![first load](./assets/documentation/onload%20image.jpg)

To solve all empty fields for the sudoku value you will click on th puzzle Icon
![sudoku solve all](./assets/documentation/sudoku%20solveAll.jpg)

This is a sample solved sudoku puzzle:
![Solved sudoku](./assets/documentation/solved%20sudokuy%20matrix.jpg)

You can as well refresh the Input to remove the solved sudoku values. by clicking on the refresh icon
![refresh](./assets/documentation/refresh%20sudoku%20matrix.jpg)

With this app you have the luxery to input your own sudoku values, to be solved. Note make sure it is a correct sudoku puzzle data.
![input field](./assets/documentation//input%20unsolved%20values.jpg)

Then you can go ahead to input your own values.<br>
_Note_: the value "0" depicts empty field, that is how the algorithm detects an empty field.
Then, click the enter Icon to push the values to the matrix.

![Render new input](./assets/documentation/RENDER%20NEW%20INPUT%20VALUES.jpg)

## How to Build the Project

---

## Deployed on Vercel

Check out the app [Sudokanary-App](https://sudokanary.vercel.app/) for more details.
