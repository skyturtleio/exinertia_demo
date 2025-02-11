defmodule ExinertiaDemo.Repo do
  use Ecto.Repo,
    otp_app: :exinertia_demo,
    adapter: Ecto.Adapters.Postgres
end
