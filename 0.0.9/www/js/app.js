// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

app.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position("top");
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      //StatusBar.styleLightContent();
      StatusBar.styleDefault();
    }
  });
  $("#scroller").simplyScroll({
    pauseOnHover : false,
    pauseOnTouch : false
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  //$ionicConfigProvider.tabs.position(top);

  // Each tab has its own nav history stack:

  .state('tab.sat', {
    url: '/sat',
    views: {
      'tab-sat': {
        templateUrl: 'templates/tab-saturday.html',
        controller: 'ScheduleCtrl'
      }
    }
  })

  .state('tab.sun', {
      url: '/sun',
      views: {
        'tab-sun': {
          templateUrl: 'templates/tab-sunday.html',
          controller: 'ScheduleCtrl'
        }
      }
    })
    .state('tab.mon', {
      url: '/mon',
      views: {
        'tab-mon': {
          templateUrl: 'templates/tab-monday.html',
          controller: 'ScheduleCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/sat');

});
