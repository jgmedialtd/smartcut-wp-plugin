#!/bin/bash

# Exit on any error
set -e

# Get the mode from the first argument, default to 'production' if not provided
mode=${1:-production}

echo "Building plugin in $mode mode..."

# Run checkout build to get the latest files
cd /Users/Jon/JGMedia/Apps/smartcut/checkout
./deployment/build.sh $mode

# Compile SCSS files
echo "Compiling SCSS files..."
cd /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/css
sass --update --no-source-map .:/Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/css


# Copy files to plugin
echo "Copying files to plugin..."
# Remove and recreate js and css directories to ensure no old files persist
rm -rf /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/js
mkdir -p /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/js
rm -rf /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/css
mkdir -p /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/css
cp /Users/Jon/JGMedia/Apps/smartcut/checkout/dist/*.js /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/js
cp /Users/Jon/JGMedia/Apps/smartcut/checkout/dist/*.css /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/css
cp -r /Users/Jon/JGMedia/Apps/smartcut/checkout/dist-upload/ /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/js

# If mode is 'development', also copy the js source maps
if [ "$mode" = "development" ]; then
	cp /Users/Jon/JGMedia/Apps/smartcut/checkout/dist/*.js.map /Users/Jon/JGMedia/Apps/sc\ store/wp-content/plugins/smartcut/ui/js
fi

echo "✨ Plugin build completed successfully!"
