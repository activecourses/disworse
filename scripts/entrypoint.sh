#!/bin/sh

npm i -g pnpm 

# Run the first command (e.g., database migrations or table push)
pnpm -F api db:push

# Run the third command (e.g., start the backend)
pnpm -F api dev
