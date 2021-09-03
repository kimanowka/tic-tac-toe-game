import React, { useState } from "react";
import Square from "./components/Square";
import { calculateWinner } from "./helper";

const App: React.FC = () => {
  const [state, setState] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = calculateWinner(state);
  const [finish, setFinish] = useState<boolean>(false);

  const handleClickOnSqure = (index: number) => {
    const copyState: string[] = [...state];
    if (winner || copyState[index]) {
      return;
    }
    if (xIsNext) {
      copyState[index] = "X";
    } else {
      copyState[index] = "O";
    }
    setState(copyState);
    setXIsNext((prev) => !prev);
  };
  const handleClickRestart = () => {
    setState(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="container">
      {xIsNext ? <h1>Следующий ход: X</h1> : <h1>Следующий ход: O</h1>}
      {winner ? (
        <div className="finish">
          <h1>Победитель : {winner}</h1>
          <button type="button" onClick={handleClickRestart}>
            Давай еще раз!
          </button>
        </div>
      ) : (
        <div className="board">
          {state.map((square, index) => {
            return (
              <Square
                key={index}
                value={square}
                index={index}
                handleClickOnSqure={handleClickOnSqure}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
