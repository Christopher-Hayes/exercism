#!/usr/bin/env bash

set -o errexit
set -o nounset

main() {
  # Validate input (arg len=1 is arg1 is integer )
  if (( $# > 1 )) || (( $# == 0 )) || [[ $1 != ?(-)+([0-9]) ]] || [[ $1 == ?([0-9])+(.)+?([0-9]) ]]; then
    # Invalid input - print usage
    echo "Usage: leap.sh <year>"
    return 1
  fi
  # Check if leap year
  if (($1 % 4 == 0)) && (($1 % 100 != 0)) || (($1 % 400 == 0)); then
    # Leap year!
    echo "true"
  else
    # Not a leap year
    echo "false"
  fi
}

main "$@"
