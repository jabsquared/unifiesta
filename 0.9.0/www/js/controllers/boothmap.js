app.controller('BoothMapCtrl', function($scope, $rootScope, $state, $stateParams, leafletData, $ionicHistory, mapService) {
  console.log('CTRL: BoothMap');

  $scope.findMe = false;
  $scope.markers = mapService.booth;
  $scope.iconColor = {
    color: '#DDDDDDFF'
  };

  $scope.showCard = false;


  $scope.center = {
    lat: 47.307492,
    lng: -122.230582,
  };

  $scope.watchID = 9;

  angular.extend($scope, {
    tiles: mapService.tiles,
    auburn: {
      lat: $scope.center.lat,
      lng: $scope.center.lng,
      zoom: 17,
      bounceAtZoomLimits: true,
      // autoDiscover: true
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

  $scope.toggleGeoLocation = function() {
    mapService.toggleGeoLocation($scope);
  };

  $scope.dissableGeoLocation = function() {
    mapService.dissableGeoLocation($scope, "booth");
  };

  $scope.onSuccess = function(position) {
    mapService.onSuccess($scope, position,"booth");
  };

  // onError Callback receives a PositionError object
  $scope.onError = function(error) {
    mapService.onError(error);
  };

  $scope.$on('leafletDirectiveMarker.click', function(e, args) {
    if (args.leafletEvent.target.options.info) {
      // console.log(args.leafletEvent.target.options.info);
      $scope.info = args.leafletEvent.target.options.info;
      $scope.showCard = true;
    } else {
      $scope.showCard = false;
    }
  });

  $scope.goBack = function() {
    $scope.dissableGeoLocation();
    $rootScope.showFooter = true;
    $ionicHistory.goBack();
  };

});
