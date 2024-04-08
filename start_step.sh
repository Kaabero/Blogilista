#!/bin/bash

echo "Start script"

cd ./frontend
npm run build:ui
npm run start:prod
