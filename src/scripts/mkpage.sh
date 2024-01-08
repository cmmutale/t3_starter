#!/bin/bash

# Check if an argument is provided
if [ $# -eq 0 ]; then
  echo "Usage: $0 <path>"
  exit 1
fi

# Get the path from the argument
path=../app/\(platform\)/$1/page.tsx

# Check if the file already exists
if [ -e "$path" ]; then
  echo "File already exists at $path. Please choose a different path."
  exit 1
fi
# Create the directory if it doesn't exist yet
mkdir -p "$(dirname "$path")"

# React boilerplate content
react_boilerplate="
import React from 'react';

function Page() {
  return (
    <div>
      <h1>Welcome to React!</h1>
    </div>
  );
}

export default Page;
"

# Create the file with the React boilerplate content
echo "$react_boilerplate" > "$path"

echo "React file created successfully at $path"
