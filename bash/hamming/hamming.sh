#!/usr/bin/env bash

main () {
  if [ "${#@}" != 2 ]; then
    echo 'Usage: hamming.sh <string1> <string2>'
    return 1
  elif [ "${#1}" != "${#2}" ]; then
    echo 'left and right strands must be of equal length'
    return 1
  else
    cmp -l <(echo "$1") <(echo "$2") | wc -l
  fi
}

main "$@"
