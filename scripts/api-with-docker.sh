echo "starting docker compose for api ..."
docker-compose -f docker-compose-full.yml up --build -d

if [  $? -eq 0 ]; then
  echo "Docker Compose ran successfully."
else
  echo "Docker Compose failed to start."
fi

