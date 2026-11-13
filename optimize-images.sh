#!/bin/bash
# Optimize images for web - resize and compress

SRC_DIR="/Users/singularity/.openclaw/workspace/solar-surf/public/images"
DST_DIR="/Users/singularity/.openclaw/workspace/solar-surf/dist/images"

cd "$SRC_DIR"

echo "Optimizing images..."

for img in *.jpg; do
    if [ -f "$img" ]; then
        # Get original dimensions
        width=$(sips -g pixelWidth "$img" 2>/dev/null | tail -1 | awk '{print $2}')
        
        # Hero images: max 1280px, others: max 1024px
        if [[ "$img" == hero-* ]]; then
            max_width=1280
        else
            max_width=1024
        fi
        
        # Only resize if larger than max
        if [ "$width" -gt "$max_width" ]; then
            echo "Resizing $img to ${max_width}px width"
            sips -s formatOptions 70 --resampleWidth "$max_width" "$img" --out "$DST_DIR/$img" 2>/dev/null
        else
            echo "Compressing $img (already ${width}px)"
            sips -s formatOptions 65 "$img" --out "$DST_DIR/$img" 2>/dev/null
        fi
        
        # Show new size
        new_size=$(ls -lh "$DST_DIR/$img" | awk '{print $5}')
        echo "  → $new_size"
    fi
done

echo "Done!"
