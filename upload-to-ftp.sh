#!/bin/bash

# Solar Surf FTP Upload Script
FTP_USER="solarsurf936"
FTP_PASS="xTug8b#uvX0@B5zg"
FTP_HOST="210.5.50.146"
REMOTE_DIR="/httpdocs"
LOCAL_DIR="/Users/singularity/Projects/solar-surf/dist"

cd "$LOCAL_DIR"

# Upload all files recursively
find . -type f | while read file; do
    # Get directory path
    dir=$(dirname "$file")
    
    # Create remote directory if needed (curl handles this)
    echo "Uploading: $file"
    curl -s -k -u "$FTP_USER:$FTP_PASS" -T "$file" "ftp://$FTP_HOST$REMOTE_DIR/$file"
done

echo "Upload complete!"
