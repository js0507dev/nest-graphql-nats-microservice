#!/bin/bash

# build gateway
cd gateway && npm run build
cd - || return

# build microservices
cd microservices || return
for d in */; do
  [ -L "${d%/}" ] && continue
  cd "$d" && npm run build
  cd - || return
done
