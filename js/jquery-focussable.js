/* eslint-disable */
import $ from 'jquery';

// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function visible( element ) {
    var visibility = element.css( "visibility" );
    while ( visibility === "inherit" ) {
        element = element.parent();
        visibility = element.css( "visibility" );
    }
    return visibility !== "hidden";
}

function focusable ( element, hasTabindex ) {
    var map, mapName, img, focusableIfVisible, fieldset,
        nodeName = element.nodeName.toLowerCase();
    if ( "area" === nodeName ) {
        map = element.parentNode;
        mapName = map.name;
        if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
            return false;
        }
        img = $( "img[usemap='#" + mapName + "']" );
        return img.length > 0 && img.is( ":visible" );
    }
    if ( /^(input|select|textarea|button|object)$/.test( nodeName ) ) {
        focusableIfVisible = !element.disabled;
        if ( focusableIfVisible ) {
            // Form controls within a disabled fieldset are disabled.
            // However, controls within the fieldset's legend do not get disabled.
            // Since controls generally aren't placed inside legends, we skip
            // this portion of the check.
            fieldset = $( element ).closest( "fieldset" )[ 0 ];
            if ( fieldset ) {
                focusableIfVisible = !fieldset.disabled;
            }
        }
    } else if ( "a" === nodeName ) {
        focusableIfVisible = element.href || hasTabindex;
    } else {
        focusableIfVisible = hasTabindex;
    }
    return focusableIfVisible && $( element ).is( ":visible" ) && visible( $( element ) );
}

$.extend( $.expr[ ":" ], {
    focusable: function( element ) {
        return focusable( element, $.attr( element, "tabindex" ) != null );
    }
} );

