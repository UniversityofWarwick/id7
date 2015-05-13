#!/bin/bash

SVG=$1
WIDTH=$2
HEIGHT=$3
OUTPUT=$4
TRANSPARENT=${5:-true}
DPI=${6:-600}

if [ "$TRANSPARENT" = true ]; then
	# Export the SVG as a PNG with a white background (so it's black on white)
	inkscape $SVG --export-background=white --export-png=.tmp.png -d $DPI

	# Create a temporary SVG that loads the temporary image
	cat >.tmp.svg <<EOF
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" version="1.1" width="100%" height="100%" viewBox="0, 0, ${WIDTH}, ${HEIGHT}">
	<defs>
		<filter id="maskfilter">
			<feColorMatrix in="SourceGraphic" color-interpolation-filters="sRGB"
				values="0 0 0 0 0
						0 0 0 0 0
						0 0 0 0 0
						0.212656 0.715158 0.072186 0 0"/>
		</filter>

		<filter id="invert">
			<feColorMatrix in="SourceGraphic" type="matrix" color-interpolation-filters="sRGB"
				values="-1 0 0 0 1
						0 -1 0 0 1
						0 0 -1 0 1
						0 0 0 1.01 0"/>
		</filter>
	</defs>

	<g filter="url(#invert)">
		<image xlink:href=".tmp.png" filter="url(#maskfilter)" width="${WIDTH}" height="${HEIGHT}" />
	</g>
</svg>

EOF

	inkscape .tmp.svg --export-png=$OUTPUT

	rm .tmp.png
	rm .tmp.svg
else
	inkscape $SVG --export-background=white --export-png=$OUTPUT --export-width=$WIDTH --export-height=$HEIGHT
fi

# SVG generation is a bit squiffy around the edges and can generate almost-invisible
# white lines along the borders. Let's assume anything almost invisible is actually
# invisible.
convert $OUTPUT \
  -transparent "#ffffff01" \
  -transparent "#ffffff02" \
  -transparent "#ffffff03" \
  -transparent "#ffffff04" \
  -transparent "#ffffff05" \
  $OUTPUT

optipng -o3 $OUTPUT

