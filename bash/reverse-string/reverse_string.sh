#!/usr/bin/env bash

set -o errexit
set -o nounset

main() {
  input=$@
  for ((k=${#input}; k >= 0; k--)); do
    output+="${input:k:1}"
  done
  echo "${output}"
}

main "$@"
