app.factory('mapService', function() {
  console.log('SERV: Map ');

  var pnp = [{
    lat: 47.307492,
    lng: -122.230582,
    focus: false,
    draggable: false,
    message: "Main Stage!",
    icon: {
      type: 'extraMarker',
      icon: 'fa-music',
      markerColor: '#f00',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307263,
    lng: -122.231312,
    focus: false,
    draggable: false,
    message: "Parking Lot!",
    icon: {
      type: 'extraMarker',
      icon: 'fa-car',
      markerColor: 'blue',
      prefix: 'fa',
      shape: 'circle'
    }
  }, {
    lat: 47.307367,
    lng: -122.229776,
    focus: false,
    draggable: false,
    message: '<p style="font-size: 14px">jab<i style="color:#fa8405">Squared</i> Booth</p>',
    info: {
      name: 'jabSquared',
      website: 'jabsquared.ninja',
      desc: 'We build website and mobile apps that help your business grow!'
    },
    icon: {
      type: 'extraMarker',
      icon: 'fa-diamond',
      markerColor: 'green',
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
    toggleGeoLocation: function($scope) {
      $scope.findMe = !$scope.findMe;
      if ($scope.findMe) {
        console.log('About to get location');
        $scope.iconColor = {
          color: '#387EF5'
        };
        $scope.watchID = navigator.geolocation.watchPosition(
          $scope.onSuccess,
          $scope.onError, {
            enableHighAccuracy: false
          });
        return;
      }
      $scope.dissableGeoLocation();
    },
    onSuccess: function($scope, position) {
      console.log('Marking location...');

      if ($scope.markers.length > 3) {
        $scope.markers.pop();
      }

      $scope.markers.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        focus: true,
        // TODO: Fix auto focus. Only works with message.
        message: 'You are Here!',
        draggable: false,
        icon: {
          iconUrl: '/img/location.png'
        }
      });

      $scope.auburn.lat = position.coords.latitude;
      $scope.auburn.lng = position.coords.longitude;
    },
    onError: function(error) {
      alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }
  };
});
