#!/bin/bash

# Function to display colorful output
print_colored() {
    local color=$1
    local message=$2
    case $color in
        "blue") echo -e "\033[34m$message\033[0m" ;;
        "green") echo -e "\033[32m$message\033[0m" ;;
        "yellow") echo -e "\033[33m$message\033[0m" ;;
        "red") echo -e "\033[31m$message\033[0m" ;;
    esac
}

# Function to validate if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        print_colored "red" "❌ Error: npm is not installed or not in PATH"
        exit 1
    fi
}

# Function to validate if package.json exists
check_package_json() {
    if [ ! -f "package.json" ]; then
        print_colored "red" "❌ Error: package.json not found in current directory"
        exit 1
    fi
}

# Function to get current version from package.json
get_current_version() {
    node -p "require('./package.json').version"
}

# Main script execution
main() {
    # Perform initial checks
    check_npm
    check_package_json

    # Display version selection menu
    print_colored "blue" "📦 Version Update Selection"
    print_colored "yellow" "Current version: $(get_current_version)"
    echo
    echo "Select version update type:"
    echo "1) Major (x.0.0) - For incompatible API changes"
    echo "2) Minor (0.x.0) - For backwards-compatible functionality"
    echo "3) Patch (0.0.x) - For backwards-compatible bug fixes"
    echo "4) None (keep current version)"
    echo

    # Get version type from user
    while true; do
        read -r -p "Enter your choice (1-4): " choice
        case $choice in
            1) version_type="major" ; break ;;
            2) version_type="minor" ; break ;;
            3) version_type="patch" ; break ;;
            4) version_type="none" ; break ;;
            *) print_colored "red" "Invalid choice. Please enter 1-4." ;;
        esac
    done

    # Update version if not "none"
    if [ "$version_type" != "none" ]; then
        print_colored "blue" "🔄 Updating version ($version_type)..."
        if npm version "$version_type" --no-git-tag-version > /dev/null 2>&1; then
            print_colored "green" "✅ Version updated successfully!"
            print_colored "yellow" "New version: $(get_current_version)"
        else
            print_colored "red" "❌ Failed to update version"
            exit 1
        fi
    else
        print_colored "yellow" "⏭️ Skipping version update"
    fi
}

# Execute main function
main