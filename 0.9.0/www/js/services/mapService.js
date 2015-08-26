app.factory('mapService', function() {
  console.log('SERV: Map ');

  var pnp = [{
    lat: 47.307263,
    lng: -122.231312,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    info: {
      number: 1,
      address: '32450 122nd ave se auburn wa 98092'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-car',
      markerColor: 'blue',
      prefix: 'fa',
      shape: 'circle'
    }
  }];

  return {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    pnp: pnp,
    dissableGeoLocation: function($scope, mapTitle) {
      $scope.findMe = false;
      console.log('Clearing watchID');
      $scope.iconColor = {
        color: '#DDDDDDFF'
      };

      navigator.geolocation.clearWatch($scope.watchID);

      // Check which map is it
      if ((mapTitle === "pnp" && $scope.markers.length > pnp.length) ||
        (mapTitle === "vendor" && $scope.markers.length > vendor.length)) {
        $scope.markers.pop();
      }

      console.log($scope.markers);
      $scope.auburn.lat = 47.307492;
      $scope.auburn.lng = -122.230582;
    },
    toggleGeoLocation : function ($scope, watchID) {
      $scope.findMe = !$scope.findMe;
      if ($scope.findMe) {
        console.log('About to get location');
        $scope.iconColor = {
          color: '#387EF5'
        };
        watchID = navigator.geolocation.watchPosition(
          onSuccess,
          onError, {
            enableHighAccuracy: false
          });
        return;
      }
      $scope.dissableGeoLocation();
    }
  };
});
