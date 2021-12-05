#!/bin/bash

# install gateway
cd gateway && npm install
cd - || return

# install microservices
cd microservices || return
for d in */; do
  [ -L "${d%/}" ] && continue
  cd "$d" && npm install
  cd - || return
done
