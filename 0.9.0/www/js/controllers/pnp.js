app.controller('PnPCtrl', function($scope, $state, $stateParams, leafletData, $ionicHistory, mapService) {

  $scope.findMe = false;

  $scope.markers = mapService.pnp;
  $scope.iconColor = {
    color: '#DDDDDDFF'
  };

  angular.extend($scope, {
    tiles: mapService.tiles,
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

  $scope.info = {};
  $scope.showCard = false;

  $scope.watchID = 9;
  // Fetching frequency, every sec...
  $scope.watchOptions = {
    frequency: 1000,
    timeout: 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  $scope.toggleGeoLocation = function() {
    mapService.toggleGeoLocation($scope);
  };

  $scope.dissableGeoLocation = function () {
    mapService.dissableGeoLocation($scope, "pnp");
  };

  $scope.onSuccess = function(position) {
    mapService.onSuccess($scope, position);
  };

  // onError Callback receives a PositionError object
  $scope.onError = function(error) {
    mapService.onError(error);
  };

  // Map Data:

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
