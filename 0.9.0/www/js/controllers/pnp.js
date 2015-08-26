app.controller('PnPCtrl', function($scope, $state, $stateParams, $ionicHistory) {

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  $scope.goToSchedule = function() {
    $state.go('schedule');
  };

  $scope.markers = [{
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
  }];

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    auburn: {
      lat: 47.307492,
      lng: -122.230582,
      zoom: 16,
      bounceAtZoomLimits: true
    },
    events: {
      markers: {
        enable: ['click']
          //logic: 'emit'
      }
    }
  });

  $scope.$on("leafletDirectiveMarker.click", function(event, args) {
    console.log('Parking marker clicked!');
  });
});
