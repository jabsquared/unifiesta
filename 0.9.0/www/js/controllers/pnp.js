app.controller('PnPCtrl', function($scope, $state, $stateParams, leafletData, $ionicHistory, mapData) {

  $scope.findMe = false;
  $scope.lat = 0;
  $scope.long = 0;
  $scope.markers = mapData.pnp;
  $scope.iconColor = {
    color: '#DDDDDDFF'
  };

  $scope.info = {};
  $scope.showCard = false;

  var watchID;
  // Fetching frequency, every sec...
  var watchOptions = {
    frequency: 1000,
    timeout: 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  $scope.dissableGeoLocation = function() {
    $scope.findMe = false;
    console.log('Clearing watchID');
    $scope.iconColor = {
      color: '#DDDDDDFF'
    };

    navigator.geolocation.clearWatch(watchID);

    if ($scope.markers.length > 3) {
      $scope.markers.pop();
    }
    console.log($scope.markers);
    $scope.auburn.lat = 47.307492;
    $scope.auburn.lng = -122.230582;
  };

  $scope.toggleGeoLocation = function() {
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
  };

  var onSuccess = function(position) {
    console.log('rending location!');
    $scope.lat = position.coords.latitude;
    $scope.long = position.coords.longitude;
    console.log('marker lat: ' + $scope.lat);
    console.log('marker long: ' + $scope.long);

    // Since Watching fetch data many time, this call will just stack up marker over and over again...

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
    $scope.auburn.lat = $scope.lat;
    $scope.auburn.lng = $scope.long;
  };

  // onError Callback receives a PositionError object
  var onError = function(error) {
    alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  };


  // Map Data:

  angular.extend($scope, {
    tiles: mapData.tiles,
    auburn: {
      lat: 47.307492,
      lng: -122.230582,
      zoom: 17,
      bounceAtZoomLimits: true
    },
    events: {
      markers: {
        enable: ['click']
          //logic: 'emit'
      }
    },
    controls: {
      scale: false
    },
  });

  $scope.$on('leafletDirectiveMarker.click', function(e, args) {
    if (args.leafletEvent.target.options.info) {
      console.log(args.leafletEvent.target.options.info);
      $scope.info = args.leafletEvent.target.options.info;
      $scope.showCard = true;
    } else {
      $scope.info = {};
      $scope.showCard = false;
    }
  });

  $scope.goBack = function() {
    $scope.dissableGeoLocation();
    $ionicHistory.goBack();
  };
});
