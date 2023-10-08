const game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";
let isGameEnded = false;
let moves = 0;

const handleClick = (e) => {
  if (!isGameEnded) {
    e.target.innerText = currentPlayer;
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    e.target.disabled = true;
    moves++;
    const container = document.getElementById("container");

    const rows = container.getElementsByClassName("row");

    for (let i = 0; i < rows.length; i++) {
      const btns = rows[i].getElementsByClassName("btn");
      for (let k = 0; k < btns.length; k++) {
        game[i][k] = btns[k].innerText;
      }
    }
    checkGame();
  }
};

const checkGame = () => {
  for (let i = 0; i < 3; i++) {
    // Row checking
    if (game[i][0] === "X" && game[i][1] === "X" && game[i][2] === "X") {
      document.getElementById("winner").innerText = "Winner is X";
      isGameEnded = true;
    } else if (game[i][0] === "O" && game[i][1] === "O" && game[i][2] === "O") {
      document.getElementById("winner").innerText = "Winner is O";
      isGameEnded = true;
    }
    // Column checking
    else if (game[0][i] === "X" && game[1][i] === "X" && game[2][i] === "X") {
      document.getElementById("winner").innerText = "Winner is X";
      isGameEnded = true;
    } else if (game[0][i] === "O" && game[1][i] === "O" && game[2][i] === "O") {
      document.getElementById("winner").innerText = "Winner is O";
      isGameEnded = true;
    }
    // Diagonal Checking
    else if (game[0][0] === "X" && game[1][1] === "X" && game[2][2] === "X") {
      document.getElementById("winner").innerText = "Winner is X";
      isGameEnded = true;
    } else if (game[0][0] === "O" && game[1][1] === "O" && game[2][2] === "O") {
      document.getElementById("winner").innerText = "Winner is O";
      isGameEnded = true;
    } else if (game[0][2] === "X" && game[1][1] === "X" && game[2][0] === "X") {
      document.getElementById("winner").innerText = "Winner is X";
      isGameEnded = true;
    } else if (game[0][2] === "O" && game[1][1] === "O" && game[2][0] === "O") {
      document.getElementById("winner").innerText = "Winner is O";
      isGameEnded = true;
    } else {
      console.log(isGameEnded);
    }
  }
  if (moves === 9 && isGameEnded === false) {
    document.getElementById("winner").innerText = "Game is drawn";
  }
};
