angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("eventx/event.html","<!DOCTYPE html>\n<ion-view name=\"event\" class=\"event\">\n\n  <ion-nav-buttons side=\"left\">\n    <button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=\"goBack()\">\n      Back\n    </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    {{::event.start | date:\'HH:mm a\'}}\n  </ion-nav-title>\n\n\n  <ion-nav-buttons side=\"right\">\n    <button ng-class=\"event.reminder ? \'button button-icon icon ion-ios-star scheduled\' : \'button button-icon icon ion-ios-star-outline\'\" ng-click=\"schedule({{event}})\">\n    </button>\n  </ion-nav-buttons>\n\n  <ion-content class=\"has-header\" has-bouncing=\"true\" padding=\"true\">\n\n    <div class=\"card\">\n      <h3 class=\"event-title\">\n        {{::event.name}}\n      </h3>\n      <p class=\"event-description\">\n        {{::event.desc}}\n      </p>\n    </div>\n\n    <div class=\"card\">\n      <ion-slide-box>\n        <!-- https://googledrive.com/host/0B6cBGXlREHi2flp4RU16VlVFNWdtZ2owQklTTlQzREU3dUZZUUF6c2lRZDYzTG1qaHc5UUE/x.jpg | png\n          -->\n        <!-- Single Image || Using event id -->\n        <ion-slide>\n          <img ng-src=\"https://googledrive.com/host/0B6cBGXlREHi2flp4RU16VlVFNWdtZ2owQklTTlQzREU3dUZZUUF6c2lRZDYzTG1qaHc5UUE/{{event.id}}.jpg\" alt=\"Event #{{event.id}}\" />\n        </ion-slide>\n\n        <!-- Multiple images || Using img arrays -->\n        <!--\n          <ion-slide ng-repeat=\"ei in event.img\">\n          <img ng-src=\"https://googledrive.com/host/0B6cBGXlREHi2flp4RU16VlVFNWdtZ2owQklTTlQzREU3dUZZUUF6c2lRZDYzTG1qaHc5UUE/{{ei}}.jpg\" alt=\"Event #{{$index}}\" />\n        </ion-slide>\n        -->\n\n      </ion-slide-box>\n\n    </div>\n    <div class=\"signature\">\n      <h1>\n        jabSquared\n      </h1>\n    </div>\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("eventx/events.html","<!DOCTYPE html>\n<ion-view name=\"events\" class=\"events\">\n    <ion-nav-buttons side=\"left\">\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\"  ng-click=\"goBack()\">\n          Back\n        </button>\n    </ion-nav-buttons>\n\n    <ion-nav-title>\n      <img alt=\"Independent de Mexico\" class=\"logo\" ng-src=\"img/main/header.png\"/>\n    </ion-nav-title>\n\n  <ion-content class=\"has-header\"  has-bouncing=\"true\" >\n  <!-- on-scroll=\"$root.showFooter=false\" -->\n\n    <ion-list>\n      <ion-item class=\"list\" collection-repeat=\"event in events\">\n        <div class=\"card\">\n\n          <a ng-click=\"schedule(event)\">\n            <div class=\"item item-avatar\">\n              <i ng-class=\"event.reminder ?\n                \'icon ion-ios-star scheduled\' :\n                \'icon ion-ios-star-outline\'\"></i>\n              <h2>Start: {{event.start | date:\'hh:mm a\'}}</h2>\n              <p>\n                End: {{event.end | date:\'hh:mm a\'}}\n              </p>\n            </div>\n          </a>\n\n          <a ng-href=\"#/events/{{event.id}}\">\n            <div class=\"item\">\n              <h2>{{event.name | limitTo : 18 : 0}}</h2>\n              <p>\n                {{event.desc | limitTo : 18 : 0}}\n              </p>\n            </div>\n          </a>\n\n        </div>\n      </ion-item>\n    </ion-list>\n\n    <div class=\"signature\">\n      <h1>\n        jabSquared\n      </h1>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("homex/home.html","<!DOCTYPE html>\n<ion-view name=\"home\" class=\"home\" >\n\n  <ion-nav-title>\n      Univision\n    <img class =\"unilogo\" alt=\"Univision\"  ng-src=\"img/small.png\"/>\n    <span class=\"bold\">\n      Events\n    </span>\n  </ion-nav-title>\n\n  <ion-content class=\"has-header\" has-bouncing=\"true\" padding=\"true\">\n\n    <img alt=\"Univision\" ng-src=\"img/main/header.png\" />\n\n    <div class=\"option\">\n      <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'events\')\">\n        Event Schedule\n      </button>\n      <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'boothmap\')\">\n        Event Map\n      </button>\n      <button class=\"button button-block button-assertive bold\" ng-click=\"navigate(\'pnp\')\">\n        Parking Map\n      </button>\n      <div class=\"raffle\">\n        <h3 class=\"bold\">Raffle #: 7489348</h3>\n      </div>\n    </div>\n\n    <div class=\"hidden\">\n      <h1>\n        jabSquared\n      </h1>\n    </div>\n    <!-- <ion-infinite-scroll distance=\"0.9%\" spinner=\"ripple\">\n    </ion-infinite-scroll> -->\n  </ion-content>\n</ion-view>\n");
$templateCache.put("mapx/boothmap.html","<!DOCTYPE html>\n\n<ion-view name=\"boothmap\" class=\"boothmap\">\n\n  <ion-nav-buttons side=\"left\">\n    <button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=\"goBack()\">\n      Back\n    </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    Booth\n  </ion-nav-title>\n\n  <ion-nav-buttons side=\"right\">\n    <button ng-style=\"iconColor\" class=\"button icon-right ion-android-locate button-clear\" ng-click=\"toggleGeoLocation()\">\n    </button>\n  </ion-nav-buttons>\n\n\n  <ion-content class=\"has-header\" scroll=\"false\" has-bouncing=\"false\" padding=\"true\">\n    <!-- <a href=\"comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic\" ,target=\"_blank\">Click here for map</a> -->\n    <div class=\"map\" data-tap-disabled=\"true\">\n      <leaflet center=\"auburn\" tiles=\"tiles\" url-hash-center=\"yes\" event-broadcast=\"events\" markers=\"markers\" width=\"100%\" height=\"100%\">\n      </leaflet>\n    </div>\n\n    <div ng-if=\"showCard\" class=\"card\">\n      <h3>{{::info.name}}</h3>\n      <p class=\"website\">{{info.website}}</p>\n      <p>{{::info.desc}}</p>\n    </div>\n    <!-- <h4>Longitude: {{long}}</h4>\n    <h4>Laditude: {{lat}}</h4> -->\n\n    <div class=\"signature\">\n      <h1>\n        jabSquared\n      </h1>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("mapx/pnp.html","<!DOCTYPE html>\n\n<ion-view name=\"pnp\" class=\"pnp\">\n\n  <ion-nav-buttons side=\"left\">\n    <button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=\"goBack()\">\n      Back\n    </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    Parking\n  </ion-nav-title>\n\n  <ion-nav-buttons side=\"right\">\n    <button ng-style=\"iconColor\" class=\"button icon-right ion-android-locate button-clear\" ng-click=\"toggleGeoLocation()\">\n    </button>\n  </ion-nav-buttons>\n\n  <ion-content class=\"has-header\" has-bouncing=\"false\" padding=\"true\">\n    <div class=\"map\" data-tap-disabled=\"true\">\n      <leaflet center=\"auburn\" tiles=\"tiles\" url-hash-center=\"yes\" event-broadcast=\"events\" height=\"100%\" markers=\"markers\" width=\"100%\">\n      </leaflet>\n    </div>\n\n    <div ng-if=\"showCard\" class=\"card\">\n      <h3>Parking Lot {{::info.number}}</h3>\n      <p>\n        {{::info.address}}\n      </p>\n      <button class=\"button button-block bold button-energized\">\n        Get Directions\n      </button>\n    </div>\n    <div class=\"signature\">\n      <h1>\n        jabSquared\n      </h1>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("sponsorx/sponsors.html","<!DOCTYPE html>\n<ion-view title=\"Sponsors\" class=\"sponsors\">\n\n	<ion-nav-buttons side=\"left\">\n		<button class=\"button icon-left button-clear ion-ios-arrow-left\" ng-click=\"goBack()\">\n			Back\n		</button>\n	</ion-nav-buttons>\n\n\n	<ion-content class=\"has-header\" has-bouncing=\"true\" padding=\"true\">\n\n		<div class=\"center\">\n			<div class=\"row\" ng-repeat=\"i in img\" ng-if=\"$index % 4 === 0\">\n				<div class=\"col col-25 card\" ng-if=\"$index < img.length\">\n					<div class=\"box\">\n						<!-- Put image into a white box, with rounded corner etc.. -->\n						<img ng-src=\"{{::img[$index]}}\" />\n					</div>\n				</div>\n\n				<div class=\"col col-25 card\" ng-if=\"$index + 1 < img.length\">\n					<div class=\"box\">\n\n						<img ng-src=\"{{::img[$index + 1]}}\" />\n					</div>\n				</div>\n\n				<div class=\"col col-25 card\" ng-if=\"$index + 2 < img.length\">\n					<div class=\"box\">\n						<img ng-src=\"{{::img[$index + 2]}}\" />\n					</div>\n				</div>\n\n				<div class=\"col col-25 card\" ng-if=\"$index + 3 < img.length\">\n					<div class=\"box\">\n						<img ng-src=\"{{::img[$index + 3]}}\" />\n					</div>\n				</div>\n\n			</div>\n\n		</div>\n\n	</ion-content>\n\n</ion-view>\n");}]);