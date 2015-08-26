app.controller('PnPCtrl', function($scope, $state, $stateParams, $ionicHistory) {

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };

  angular.extend($scope, {
    tiles: {
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    auburn: {
      lat: 47.307492,
      lng: -122.230582,
      zoom: 17,
      bounceAtZoomLimits: true
    },
    markers: {
      m1: {
        lat: 47.307492,
        lng: -122.230582,
        focus: true,
        draggable: false,
        message: "Hi there!",
        icon: {}
      }
    },
    events: {
      markers: {
        enable: ['dragend']
          //logic: 'emit'
      }
    }
  });

  $scope.$on("leafletDirectiveMarker.dragend", function(event, args) {
    console.log('hola');
    $scope.markers.m1.lat = args.model.lat;
    $scope.markers.m1.lng = args.model.lng;
  });

  $scope.goToSchedule = function() {
    $state.go('schedule');
  };
});
