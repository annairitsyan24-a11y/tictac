import { useState } from "react";
import "./App.css";
function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [playerOne, setPlayerOne] = useState("X");
  const [playerTwo, setPlayerTwo] = useState("0");
  const [play, setPlay] = useState(playerOne);

  function fillBoard(i, j) {
if(board[i][j] !== "") {return}

    let newBoard = board.map((row, x) => {
      return row.map((item, y) => {
        if (i === x && j === y) {
        return play;
        } else {
          return item;
        }
      });
    });
    if (
      newBoard[0][0] === play &&
      newBoard[0][1] === play &&
      newBoard[0][2] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[0][0] === play &&
      newBoard[1][1] === play &&
      newBoard[2][2] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[0][0] === play &&
      newBoard[1][0] === play &&
      newBoard[2][0] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[1][0] === play &&
      newBoard[1][1] === play &&
      newBoard[1][2] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[2][0] === play &&
      newBoard[2][1] === play &&
      newBoard[2][2] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[0][2] === play &&
      newBoard[1][1] === play &&
      newBoard[2][0] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[0][1] === play &&
      newBoard[1][1] === play &&
      newBoard[2][1] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (
      newBoard[0][2] === play &&
      newBoard[1][2] === play &&
      newBoard[2][2] === play
    ) {
      alert(play + " " + "Հաղթանակ");
    }
    if (play === "X") {
      setPlay("0");
    } else {
      setPlay("X");
    }
    setBoard(newBoard);
  }

  return (
    <>
      <select
        value={playerOne}
        onChange={(e) => {
          setPlayerOne(e.target.value);
        }}
      >
        <option value="X">X</option>
        <option value="0">0</option>
      </select>

      <h2>Առաջին խաղացող՝ {playerOne}</h2>
      <h2>Հիմա խաղում է՝ {play}</h2>
      <div className="board">
        {board.map((row, i) => {
          return (
            <div key={i}>
              {row.map((item, j) => (
                <button key={j} onClick={() => fillBoard(i, j)}>
                  {item}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
