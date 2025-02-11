defmodule ExinertiaDemoWeb.PageController do
  use ExinertiaDemoWeb, :controller

  def home(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, :home, layout: false)
  end

  def inertia(conn, _params) do
    conn
    |> render_inertia("Dashboard")
  end
end
