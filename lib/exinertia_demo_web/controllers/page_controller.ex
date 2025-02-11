defmodule ExinertiaDemoWeb.PageController do
  use ExinertiaDemoWeb, :controller

  def home(conn, _params) do
    # redirect to Inertia.js pages
    redirect(conn, to: ~p"/i")
  end

  def welcome(conn, _params) do
    conn
    |> render_inertia("Welcome")
  end

  def counter(conn, _params) do
    conn
    |> render_inertia("Counter")
  end

  def stock(conn, _params) do
    # The default home page that comes with a 
    # new Phoenix project
    render(conn, :home, layout: false)
  end
end
