// app.directive('', function() {
//   return {
//     restrict: 'E',
//     template: ""
//   };
// });
// app.directive('imageonload ', function() {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       element.bind('load', function() {
//         //call the function that was passed
//         scope.$apply(attrs.imageonload);
//       });
//     }
//   };
// });
app.directive('imageonload', function() {

  'use strict';

  return {
    restrict: 'A',

    link: function(scope, element, attrs) {

      var cssClass = attrs.loadedclass;
      var origSrc;
      var timeout;

      function reload() {
        timeout = setTimeout(function() {
          if (!origSrc) {
            origSrc = element[0].src;
          }

          element[0].src = origSrc + '?' + Date.now();
          reload();
        }, 4500);
      }

      reload();

      element.bind('load', function(e) {
        clearTimeout(timeout);
        element.addClass(cssClass);
        scope.$apply(attrs.imageonload);
      });
    },
  };
});
