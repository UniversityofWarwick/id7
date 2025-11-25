#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <version>"
  exit 1
fi

VERSION=$1
BRANCH_NAME="release/v$VERSION"

# Check if the branch already exists
if git rev-parse --verify "$BRANCH_NAME" >/dev/null 2>&1; then
  echo "Branch '$BRANCH_NAME' already exists."
  git checkout "$BRANCH_NAME"
else
  # Create a new branch
  git checkout -b "$BRANCH_NAME"
fi


echo "Updating package.json to version $VERSION"
sed -i -E 's/"version": ".+"/"version": "'$VERSION'"/' package.json

echo "Updating _config.yml to version $VERSION"
sed -i -E 's/current_version: .+/current_version: '$VERSION'/' _config.yml

echo "Done. Please review the changes and commit them."
