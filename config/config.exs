# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :inertia,
  endpoint: ExinertiaDemoWeb.Endpoint,
  static_paths: ["/assets/app.js"],
  default_version: "1",
  camelize_props: false,
  history: [encrypt: false],
  ssr: false,
  raise_on_ssr_failure: config_env() != :prod

config :bun,
  version: "1.2.2",
  dev: [
    args: ~w(x --bun vite),
    cd: Path.expand("../assets", __DIR__),
    env: %{},
  ],
  install: [
    args: ~w(i),
    cd: Path.expand("../assets", __DIR__),
    env: %{},
  ],
  build: [
    args: ~w(x --bun vite build),
    cd: Path.expand("../assets", __DIR__),
    env: %{},
  ],
  css: [
    args: ~w(run tailwindcss --input=css/app.css --output=../priv/static/assets/app.css),
    cd: Path.expand("../assets", __DIR__),
    env: %{},
  ]

config :exinertia_demo,
  ecto_repos: [ExinertiaDemo.Repo],
  env: config_env(),
  generators: [timestamp_type: :utc_datetime_usec, binary_id: true]

# Configures the endpoint
config :exinertia_demo, ExinertiaDemoWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [html: ExinertiaDemoWeb.ErrorHTML, json: ExinertiaDemoWeb.ErrorJSON],
    layout: false,
  ],
  pubsub_server: ExinertiaDemo.PubSub,
  live_view: [signing_salt: "5dRSp+0T"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
config :exinertia_demo, ExinertiaDemo.Mailer, adapter: Swoosh.Adapters.Local

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Use UUID and usecs for migrations
config :exinertia_demo, ExinertiaDemo.Repo, migration_primary_key: [type: :binary_id]
config :exinertia_demo, ExinertiaDemo.Repo, migration_foreign_key: [type: :binary_id]
config :exinertia_demo, ExinertiaDemo.Repo, migration_timestamps: [type: :utc_datetime_usec]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
