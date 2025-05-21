#!/bin/bash

# Build the project
npm run build

# Navigate to the build output directory
cd dist

# Create a .nojekyll file to prevent GitHub Pages from ignoring files that begin with an underscore
touch .nojekyll

# Create a custom 404.html file that redirects to index.html
cp ../404.html ./404.html

# If you're using a custom domain
# echo 'yourdomain.com' > CNAME

# Initialize git and push to gh-pages branch
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Force push to the gh-pages branch
git push -f git@github.com:dswilliams/dan-williams-personal-page.git main:gh-pages

# Return to the project root directory
cd ..

echo "Deployment complete!"