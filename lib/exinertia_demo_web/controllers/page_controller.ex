defmodule ExinertiaDemoWeb.PageController do
  use ExinertiaDemoWeb, :controller

  def welcome(conn, _params) do
    conn
    |> assign_prop(:message, "Phoenix + Inertia.js + React 🔥")
    |> assign_prop(:name, "skyturtleio")
    |> render_inertia("Welcome")
  end

  def counter(conn, _params) do
    conn
    |> render_inertia("Counter")
  end

  def tictactoe(conn, _params) do
    conn
    |> render_inertia("TicTacToe")
  end

  def stock(conn, _params) do
    # The default home page that comes with a 
    # new Phoenix project
    render(conn, :home, layout: false)
  end
end
