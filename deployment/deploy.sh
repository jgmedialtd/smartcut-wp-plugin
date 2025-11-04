#!/bin/bash

# Define the directory path
dir_path="/Users/Jon/JGMedia/Apps/sc store/wp-content/plugins/smartcut"

cd "$dir_path"

echo 'Running composer update'
composer update

echo "Creating translation files..."
php -d memory_limit=512M /usr/local/bin/wp i18n --skip-js make-pot "$dir_path"

# Get the current version before update
old_version=$(sed -n 's/.*Version: \([0-9]*\.[0-9]*\.[0-9]*\).*/\1/p' "${dir_path}/smartcut.php")

# Run version update using npm script
echo "Running version update..."
npm run version-update

# Get the new version from package.json
new_version=$(node -p "require('./package.json').version")

if [ "$new_version" = "$old_version" ]; then
    echo "Version remains unchanged at $old_version"
else
    echo "Updating from $old_version to $new_version"

    # Update the version in smartcut.php
    if sed -i '' "s/Version: $old_version/Version: $new_version/" "${dir_path}/smartcut.php" &&
        sed -i '' "s/define('SMARTCUT_CURRENT_VERSION', '$old_version');/define('SMARTCUT_CURRENT_VERSION', '$new_version');/" "${dir_path}/smartcut.php"; then
        echo "Version updated successfully to $new_version"
    else
        echo "Error: Version update failed"
        exit 1
    fi

    # Verify the changes
    if grep -q "Version: $new_version" "${dir_path}/smartcut.php" &&
        grep -q "define('SMARTCUT_CURRENT_VERSION', '$new_version');" "${dir_path}/smartcut.php"; then
        echo "Version verification successful"
    else
        echo "Error: Version update failed"
        exit 1
    fi
fi

echo "Deploying version $new_version..."

release_path="/Users/Jon/JGMedia/Apps/plugin-release"
echo "Moving files to ${release_path}..."

# Delete all files in the release path
rm -rf "${release_path:?}/"*

exclude=("*.ts" "*.hs" "*.scss" "*.js.map" ".eslintrc.json" "package.json" "package-lock.json" "tsconfig.json" ".git" "scripts" "composer.json" "composer.lock" ".gitignore")

# Create rsync command with excludes
rsync_cmd="rsync -av \"${dir_path}/\" \"${release_path}\""
for item in "${exclude[@]}"; do
    rsync_cmd+=" --exclude=$item"
done

# Execute rsync command
eval $rsync_cmd

parent_dir=$(dirname "$dir_path")
dir_name=$(basename "$dir_path")

echo "Creating zip file..."

# Delete existing zip file, if any
rm -f "${parent_dir}/${dir_name}.zip"

# Create new zip file
cd "${release_path}"
zip -qr "${parent_dir}/${dir_name}.zip" .

echo "Zip file created in ${parent_dir}/${dir_name}.zip"

# Publish to GitHub
echo "Publishing ${new_version} to GitHub..."

set -e

# Push new version to GitHub with a tag
git add .
git commit -m "Release version $new_version"
git tag -a "$new_version" -m "Version $new_version"
git push origin main
git push origin "$new_version"

# Create a release on GitHub and upload the zip file
gh release create "$new_version" -t "Version $new_version" -n "Download smartcut.zip from the assets below, then 'Add New Plugin' > 'Upload Plugin' in WordPress."
gh release upload "$new_version" "${parent_dir}/${dir_name}.zip"

echo "Release $new_version published successfully."