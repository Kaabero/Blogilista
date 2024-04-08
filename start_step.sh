#!/bin/bash

echo "Start script"

cd ./frontend
npm run build:ui
cd ../backend
npm run start
