echo "starting docker compose for api ..."
pnpm compose:up

if [  $? -eq 0 ]; then
  echo "Docker Compose ran successfully."
else
  echo "Docker Compose failed to start."
  exit 1;
fi

pnpm dev
