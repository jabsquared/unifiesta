angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("eventx/event.html","<!DOCTYPE html>\n<ion-view name=\"event\" class=\"event\">\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\n\n    <ion-nav-buttons side=\"left\">\n      <a nav-direction=\"back\" ng-click=\"goBack()\">\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\">\n          Back\n        </button>\n      </a>\n    </ion-nav-buttons>\n\n  <ion-nav-title>\n    {{event.start | date:\'HH:mm a\'}}\n  </ion-nav-title>\n\n\n  <ion-nav-buttons side=\"right\">\n    <button class=\"button button-icon icon ion-ios-bell\" ng-click=\"schedule({{event}})\">\n    </button>\n  </ion-nav-buttons>\n\n  </ion-nav-bar>\n\n  <ion-content class=\"has-header has-footer\" has-bouncing=\"true\" padding=\"true\">\n\n    <div class=\"card\">\n      <h3 class=\"event-title\">\n        {{event.name}}\n      </h3>\n      <p class=\"event-description\">\n        {{event.desc}}\n      </p>\n    </div>\n\n    <div class=\"card\" ng-show=\"hasImage\">\n      <ion-slide-box>\n        <ion-slide ng-repeat=\"ei in event.img\">\n          <img ng-src=\"img/eimg/{{ei}}.jpg\" alt=\"Event #{{$index}}\" />\n        </ion-slide>\n      </ion-slide-box>\n\n    </div>\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("eventx/events.html","<!DOCTYPE html>\n<ion-view name=\"events\" class=\"events\">\n\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\n\n    <ion-nav-buttons side=\"left\">\n      <a nav-direction=\"back\" ng-click=\"goBack()\">\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\">\n          Back\n        </button>\n      </a>\n    </ion-nav-buttons>\n\n    <ion-nav-title>\n      <univision-logo></univision-logo>\n    </ion-nav-title>\n\n  </ion-nav-bar>\n\n  <ion-content class=\"has-header has-footer\" has-bouncing=\"true\" overflow-scroll=\"true\">\n    <ion-item class=\"list\" collection-repeat=\"event in events\">\n      <div class=\"card\">\n\n        <a ng-click=\"schedule(event)\">\n          <div class=\"item item-avatar\">\n            <i class=\"icon ion-android-time\"></i>\n            <h2>Start : {{event.start | date:\'h:mm a\'}}</h2>\n            <p>\n              End: {{event.end | date:\'h:mm a\'}}\n            </p>\n          </div>\n        </a>\n\n        <a ng-href=\"#/events/{{event.id}}\">\n          <div class=\"item\">\n            <h2>{{event.name | limitTo : 27 : 0}}</h2>\n            <p>\n              {{event.desc | limitTo : 27 : 0}}\n            </p>\n          </div>\n        </a>\n\n      </div>\n    </ion-item>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("homex/home.html","<!DOCTYPE html>\n<ion-view name=\"home\" class=\"home\" >\n\n  <ion-content class=\"has-footer\" padding=\"true\">\n\n    <img alt=\"Univision\" ng-src=\"img/main/header.png\" />\n\n    <div>\n      <button class=\"button button-block bold\" ng-click=\"navigate(\'events\')\">\n        Event Schedule\n      </button>\n\n      <button class=\"button button-block bold\" ng-click=\"navigate(\'boothmap\')\">\n        Event Map\n      </button>\n\n      <button class=\"button button-block bold\" ng-click=\"navigate(\'pnp\')\">\n        Parking Map\n      </button>\n\n      <div class=\"raffle\">\n        <h3 class=\"bold\">Raffle #: 7489348</h3>\n      </div>\n\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("mapx/boothmap.html","<!DOCTYPE html>\n\n<ion-view name=\"boothmap\" class=\"boothmap\">\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\n\n    <ion-nav-buttons side=\"left\">\n      <a nav-direction=\"back\" ng-click=\"goBack()\">\n        <button class=\"button icon-left button-clear ion-ios-arrow-left\">\n          Back\n        </button>\n      </a>\n    </ion-nav-buttons>\n\n  <ion-nav-title>\n    Booth\n  </ion-nav-title>\n\n  <ion-nav-buttons side=\"right\">\n    <button ng-style=\"iconColor\" class=\"button icon-right ion-android-locate button-clear\" ng-click=\"toggleGeoLocation()\">\n    </button>\n  </ion-nav-buttons>\n  </ion-nav-bar>\n\n\n  <ion-content class=\"has-header has-footer\" scroll=\"false\" has-bouncing=\"false\" padding=\"true\">\n    <!-- <a href=\"comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic\" ,target=\"_blank\">Click here for map</a> -->\n    <div class=\"map\" data-tap-disabled=\"true\">\n      <leaflet center=\"auburn\" tiles=\"tiles\" url-hash-center=\"yes\" event-broadcast=\"events\" markers=\"markers\" width=\"100%\" height=\"100%\">\n      </leaflet>\n    </div>\n\n    <div ng-if=\"showCard\" class=\"card\">\n      <h3>{{info.name}}</h3>\n      <p class=\"website\">{{info.website}}</p>\n      <p>{{info.desc}}</p>\n    </div>\n    <!-- <h4>Longitude: {{long}}</h4>\n    <h4>Laditude: {{lat}}</h4> -->\n  </ion-content>\n</ion-view>\n");
$templateCache.put("mapx/pnp.html","<!DOCTYPE html>\n\n<ion-view name=\"pnp\" class=\"pnp\">\n  <ion-nav-bar class=\"bar-energized\" align-title=\"center\">\n\n  <ion-nav-buttons side=\"left\">\n    <a nav-direction=\"back\" ng-click=\"goBack()\">\n      <button class=\"button icon-left button-clear ion-ios-arrow-left\">\n        Back\n      </button>\n    </a>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    Parking\n  </ion-nav-title>\n\n  <ion-nav-buttons side=\"right\">\n    <button ng-style=\"iconColor\" class=\"button icon-right ion-android-locate button-clear\" ng-click=\"toggleGeoLocation()\">\n    </button>\n  </ion-nav-buttons>\n  </ion-nav-bar>\n\n  <ion-content class=\"has-header has-footer\" has-bouncing=\"false\" padding=\"true\">\n    <div class=\"map\" data-tap-disabled=\"true\">\n      <leaflet center=\"auburn\" tiles=\"tiles\" url-hash-center=\"yes\" event-broadcast=\"events\" height=\"100%\" markers=\"markers\" width=\"100%\">\n      </leaflet>\n    </div>\n\n    <div ng-if=\"showCard\" class=\"card\">\n      <h3>Parking Lot {{info.number}}</h3>\n      <p>\n        {{info.address}}\n      </p>\n      <button class=\"button button-block bold button-energized\">\n        Get Directions\n      </button>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("sponsorx/sponsors.html","<!DOCTYPE html>\n<ion-view title=\"Sponsors\" class=\"sponsors\">\n	<ion-nav-bar class=\"bar-energized\" align-title=\"center\">\n\n		<ion-nav-buttons side=\"left\">\n			<a nav-direction=\"back\" ng-click=\"goBack()\">\n				<button class=\"button icon-left button-clear ion-ios-arrow-left\">\n					Back\n				</button>\n			</a>\n		</ion-nav-buttons>\n\n	</ion-nav-bar>\n\n	<ion-content class=\"has-header\" has-bouncing=\"true\" padding=\"true\">\n		<div class=\"row\" ng-repeat=\"i in img\" ng-if=\"$index % 4 === 0\">\n\n			<div class=\"col col-25 card\" ng-if=\"$index < img.length\">\n				<div class=\"box\">\n					<!-- Put image into a white box, with rounded corner etc.. -->\n					<img ng-src=\"{{img[$index]}}\" />\n				</div>\n			</div>\n\n			<div class=\"col col-25 card\" ng-if=\"$index + 1 < img.length\">\n				<div class=\"box\">\n\n					<img ng-src=\"{{img[$index + 1]}}\"/>\n				</div>\n			</div>\n\n			<div class=\"col col-25 card\" ng-if=\"$index + 2 < img.length\">\n				<div class=\"box\">\n					<img ng-src=\"{{img[$index + 2]}}\"/>\n				</div>\n			</div>\n\n			<div class=\"col col-25 card\" ng-if=\"$index + 3 < img.length\">\n				<div class=\"box\">\n					<img ng-src=\"{{img[$index + 3]}}\" />\n				</div>\n			</div>\n\n		</div>\n\n	</ion-content>\n\n</ion-view>\n");}]);