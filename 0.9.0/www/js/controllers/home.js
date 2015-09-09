app.controller('HomeCtrl', function($scope, $http, $rootScope, $state, $ionicHistory, $localStorage) {
  console.log('CTRL: Home');

  $scope.$storage = $localStorage.$default({
    gotRaffle: false,
  });

  console.log($scope.$storage.raffle);

  if (!$scope.$storage.gotRaffle) {
    $http.get('http://unifiesta.mybluemix.net/gr').
    then(function(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response.data[0]);
      $scope.$storage.raffle = response.data[0];
      $scope.$storage.gotRaffle = true;
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('Error retriving raffle number: ' + response);
    });
  }

  $scope.navigate = function(title) {
    $rootScope.showFooter = false;
    $state.go(title);
  };

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

});
