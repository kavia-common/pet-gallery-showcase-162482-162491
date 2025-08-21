#!/bin/bash
cd /home/kavia/workspace/code-generation/pet-gallery-showcase-162482-162491/pet_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

