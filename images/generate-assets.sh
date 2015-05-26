#!/bin/bash

# These assets are used almost exclusively for IE8 fallback, so don't need retina versions

./svg-to-png.sh src/masthead-logo-bleed-sm.svg 1170 300 masthead-logo-bleed-sm.png
./svg-to-png.sh src/masthead-logo-bleed-xs.svg 1680 300 masthead-logo-bleed-xs.png

./svg-to-png.sh src/masthead-logo-bleed-wide-xs.svg 1680 300 masthead-logo-bleed-wide-xs.png
./svg-to-png.sh src/masthead-logo-bleed-wide-sm.svg 992 80 masthead-logo-bleed-wide-sm.png
./svg-to-png.sh src/masthead-logo-bleed-wide-md.svg 1200 80 masthead-logo-bleed-wide-md.png
./svg-to-png.sh src/masthead-logo-bleed-wide-lg.svg 3000 80 masthead-logo-bleed-wide-lg.png

./svg-to-png.sh logotype-colour.svg 136 26 id6a-logotype.png false

./svg-to-png.sh logo-with-descriptor-purple.svg 600 398 logo.png false
./svg-to-png.sh logo-purple.svg 600 347 logo-no-descriptor.png false

./svg-to-png.sh logo-divider-purple.svg 1130 40 logo-divider-purple.png false
./svg-to-png.sh logo-divider-gray.svg 1130 40 logo-divider-gray.png false
./svg-to-png.sh logo-divider-gold.svg 1130 40 logo-divider-gold.png false
./svg-to-png.sh logo-divider-orange.svg 1130 40 logo-divider-orange.png false
./svg-to-png.sh logo-divider-red.svg 1130 40 logo-divider-red.png false
./svg-to-png.sh logo-divider-green.svg 1130 40 logo-divider-green.png false
./svg-to-png.sh logo-divider-blue.svg 1130 40 logo-divider-blue.png false