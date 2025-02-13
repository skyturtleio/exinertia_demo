function MyButton() {
  return (
    <button className="rounded-sm m-2 p-2 bg-sky-600 text-white">
      I'm a button
    </button>
  );
}

export default function TicTacToe() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Tic Tac Toe</h1>
      <MyButton />
    </div>
  );
}
