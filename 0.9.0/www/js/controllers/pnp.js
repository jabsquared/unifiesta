app.controller('PnPCtrl', function($scope, $rootScope, $state, $stateParams, leafletData, $ionicHistory, mapService, $cordovaInAppBrowser) {
  console.log('CTRL: PnP');

  $scope.findMe = false;

  $scope.markers = mapService.pnp;
  $scope.iconColor = {
    color: '#DDDDDDFF',
  };

  $scope.showCard = false;

  $scope.center = {
    lat: 47.307701,
    lng: -122.228734,
  };

  $scope.watchID = 9;

  angular.extend($scope, {
    tiles: mapService.tiles,
    auburn: {
      lat: $scope.center.lat,
      lng: $scope.center.lng,
      zoom: 16,
      bounceAtZoomLimits: true,
    },
    events: {
      markers: {
        enable: ['click', 'popupclose'],

        //logic: 'emit'
      },
    },
    controls: {
      scale: false,
    },
  });

  $scope.toggleGeoLocation = function() {
    mapService.toggleGeoLocation($scope);
  };

  $scope.dissableGeoLocation = function() {
    mapService.dissableGeoLocation($scope, 'pnp');
  };

  $scope.onSuccess = function(position) {
    mapService.onSuccess($scope, position, 'pnp');
  };

  // onError Callback receives a PositionError object
  $scope.onError = function(error) {
    mapService.onError(error);
  };

  // Map Data:

  $scope.$on('leafletDirectiveMarker.click', function(e, args) {
    // console.log('Clicked Parking Lot!');
    console.log(args.leafletEvent.target.options);
    if ($scope.info === args.leafletEvent.target.options.info) {
      $scope.showCard = false;
      $scope.info = 0;
      return;
    }

    if (args.leafletEvent.target.options.info) {
      // console.log(args.leafletEvent.target.options.info);
      $scope.info = args.leafletEvent.target.options.info;
      $scope.geoInfo = args.leafletEvent.target.options;
      $scope.showCard = true;
      return;
    }

    $scope.showCard = false;

  });

  $scope.$on('leafletDirectiveMarker.popupclose', function(e, args) {
    $scope.showCard = false;
  });

  var options = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'yes',
  };

  $scope.openGMap = function(geoInfo) {
    var url = 'https://maps.google.com/?q=' + geoInfo.lat + ',' + geoInfo.lng + '&t=m';
    $cordovaInAppBrowser
      .open(url, '_blank', options)
      .then(function(event) {
        // success
      }, function(event) {
        // error
      });
  };

  $scope.goBack = function() {
    $scope.dissableGeoLocation();
    $rootScope.showFooter = true;
    $ionicHistory.goBack();
  };
});
