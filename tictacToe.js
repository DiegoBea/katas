const columnSeparator = "|";
const rowSeparator = "-";

function displayBoard(board, width) {
  var separator = showRowSeparators(width * 3 + (width - 1));
  var outputBoard = "";
  var row = "";
  for (let index = 0; index < board.length; index++) {
    row = row.concat(` ${board[index]} `);

    if ((index + 1) % width !== 0) {
      row = row.concat(`${columnSeparator}`);
      continue;
    }

    outputBoard = outputBoard.concat(row);
    if (index + 1 < board.length) {
      outputBoard = outputBoard.concat("\n" + separator + "\n");
    }
    row = "";
  }

  return outputBoard;
}

function showRowSeparators(width) {
  return Array(width).fill(rowSeparator).join("");
}

console.log(displayBoard(["O", "X", "X", "O"], 2));
console.log(displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " "], 3));
console.log(
  displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"], 5)
);
console.log(
  displayBoard(["O", "X", " ", " ", "X", " ", "X", "O", " ", "O"], 2)
);
console.log(
  displayBoard(
    [
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
      "2",
      "3",
      "4",
      "5",
      "1",
    ],
    6
  )
);
