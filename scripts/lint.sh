#!/bin/bash

# lint gateway
cd gateway && npm run lint
cd - || return

# lint microservices
cd microservices || return
for d in */; do
  [ -L "${d%/}" ] && continue
  cd "$d" && npm run lint
  cd - || return
done
