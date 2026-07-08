#!/bin/bash

# Clean script to remove node_modules and .turbo directories
# from all folders and subfolders in the project

set -e  # Exit on any error

echo "🧹 Starting cleanup..."

# Function to remove directories if they exist
remove_if_exists() {
    local dir_name="$1"
    local dirs_found
    local count=0

    echo "🔍 Looking for ${dir_name} directories..."

    # Find all instances of the directory
    dirs_found=$(find . -name "$dir_name" -type d 2>/dev/null)

    if [ -z "$dirs_found" ]; then
        echo "  ✅ No ${dir_name} directories found"
    else
        # Remove each directory and count them
        while IFS= read -r dir; do
            echo "  🗑️  Removing: ${dir}"
            rm -rf "$dir"
            ((count++))
        done <<< "$dirs_found"

        echo "  ✅ Removed ${count} ${dir_name} director$([ $count -eq 1 ] && echo "y" || echo "ies")"
    fi
    echo
}

# Function to remove files if they exist
remove_files_if_exist() {
    local file_name="$1"
    local files_found
    local count=0

    echo "🔍 Looking for ${file_name} files..."

    # Find all instances of the file
    files_found=$(find . -name "$file_name" -type f 2>/dev/null)

    if [ -z "$files_found" ]; then
        echo "  ✅ No ${file_name} files found"
    else
        # Remove each file and count them
        while IFS= read -r file; do
            echo "  🗑️  Removing: ${file}"
            rm -f "$file"
            ((count++))
        done <<< "$files_found"

        echo "  ✅ Removed ${count} ${file_name} file$([ $count -eq 1 ] && echo "" || echo "s")"
    fi
    echo
}

remove_if_exists ".turbo"
remove_if_exists "node_modules"

remove_files_if_exist "bun.lock"

echo "🎉 Cleanup completed successfully!"
