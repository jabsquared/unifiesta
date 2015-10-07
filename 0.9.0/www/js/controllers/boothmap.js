app.controller('BoothMapCtrl', function($scope, $rootScope, $state, $stateParams, leafletData, $ionicHistory, mapService) {
  console.log('CTRL: BoothMap');

  $scope.findMe = false;
  $scope.markers = mapService.booth;
  $scope.iconColor = {
    color: '#DDDDDDFF'
  };

  $scope.showCard = false;

  $scope.center = {
    lat: 47.307400,
    lng: -122.229800,
  };

  $scope.watchID = 9;

  angular.extend($scope, {
    tiles: mapService.tiles,
    auburn: {
      lat: $scope.center.lat,
      lng: $scope.center.lng,
      zoom: 18,
      bounceAtZoomLimits: true,
      // autoDiscover: true
    },
    defaults: {
      zoomControl : false,
      maxZoom: 19,
      minZoom: 18,
      path: {
        weight: 9,
        opacity: 0.9
      }
    },
    maxbounds: {
      northEast: {
        lat: 47.308096,
        lng: -122.228633,
      },
      southWest: {
        lat: 47.306735,
        lng: -122.231068
      },
    },
    events: {
      markers: {
        enable: ['click','popupclose']
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
    mapService.onSuccess($scope, position, "booth");
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

  $scope.$on('leafletDirectiveMarker.popupclose', function (e, args) {
    $scope.showCard = false;
  });

  $scope.goBack = function() {
    $scope.dissableGeoLocation();
    $rootScope.showFooter = true;
    $ionicHistory.goBack();
  };

});
