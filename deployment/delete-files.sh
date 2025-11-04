#!/bin/bash

TARGET_DIR="/Users/Jon/JGMedia/Apps/sc store/wp-content/uploads"

# Check if directory exists
if [ ! -d "$TARGET_DIR" ]; then
	echo "Error: Directory '$TARGET_DIR' does not exist"
	exit 1
fi

echo "Starting cleanup in: $TARGET_DIR"

# Find and remove order summary PDFs
find "$TARGET_DIR" -type f -name "order-summary.pdf" -exec rm -v {} \;

# Find and remove layout DXF zips
find "$TARGET_DIR" -type f -name "*-layout-dxf.zip" -exec rm -v {} \;

# Find and remove machining DXF zips
find "$TARGET_DIR" -type f -name "*-machining-dxf.zip" -exec rm -v {} \;

# Find and remove parts CSVs
find "$TARGET_DIR" -type f -name "*-parts.csv" -exec rm -v {} \;

# Find and remove any remaining PDFs
find "$TARGET_DIR" -type f -name "*.pdf" -exec rm -v {} \;

echo "File cleanup completed"

# Remove empty directories
echo "Removing empty directories..."
find "$TARGET_DIR" -type d -empty -delete -print

echo "Cleanup fully completed"
