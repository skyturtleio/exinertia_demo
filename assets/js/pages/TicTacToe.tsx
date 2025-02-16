import { useState } from "react";

function Square({
  value,
  onSquareClick,
}: {
  value: Square;
  onSquareClick: React.MouseEvent;
}) {
  return (
    <button
      onClick={onSquareClick}
      className="-mr-1 -mt-1 size-8 border border-solid border-black bg-white text-center text-xl font-bold"
    >
      {value}
    </button>
  );
}

type Square = "X" | "O" | null;

function Board() {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div>
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div>
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div>
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

export default function TicTacToe() {
  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold">Tic Tac Toe</h1>
      <Board />
    </div>
  );
}
