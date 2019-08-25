#!/usr/bin/env bash

main() {
  if [[ $# == 1 ]]; then
    echo "Hello, ${1}"
  else
    echo "Usage: ./error_handling <greetee>"
    return 1
  fi
}

main "$@"
