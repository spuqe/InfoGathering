( function($) {


  $.fingerprint = function() {

    // * the user agent
    // * screen size
    // * color depth
    // * the timezone offset
    // * sessionStorage support
    // * localStorage support
    // * the list of all installed plugins (we're using their names,
    //    descriptions, mime types and file name extensions here)
    function _raw() {

      return [
        navigator.userAgent,
        [ screen.height, screen.width, screen.colorDepth ].join("x"),
        ( new Date() ).getTimezoneOffset(),
        !!window.sessionStorage,
        !!window.localStorage,
        $.map( navigator.plugins, function(p) {
          return [
            p.name,
            p.description,
            $.map( p, function(mt) {
              return [ mt.type, mt.suffixes ].join("~");
            }).join(",")
          ].join("::");
        }).join(";")
      ].join("###");
    }

    function _md5() {
      if ( typeof window.md5 === "function" ) {
        return md5( _raw() );
      }
      else {
        // If `window.md5()`
        throw "md5 unavailable some why :D";
      }
    }

    return _md5();
  }

})(jQuery);
