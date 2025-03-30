#!/bin/bash
# Ensure the application runs with Node.js 22.14.0

# Print Node.js version information
echo "Using Node.js:"
node -v

# Remove reusePort option for compatibility with Node.js 22
sed -i 's/reusePort: true,/\/\/ reusePort option is no longer needed in Node.js v22/' server/index.ts

# Run the development server
npm run dev