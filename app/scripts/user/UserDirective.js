"use strict";

angular
  .module('lolanalyticsApp')
  .directive('user', function (
    UserService,
    UserHttp,
    $location
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/user/UserView.html',
      scope: {},
      link: function (scope) {

        scope.getSummonerInfo = function (name) {
          if(typeof name === 'undefined') {
            scope.error = "Fill in a summoner name before submitting!";
            return;
          }
          UserHttp.getSummonerId(name)
            .then(function (res) {
              scope.error = "";
              var firstKey = Object.keys(res.data)[0];
              UserService.setUserInfo(res.data[firstKey]);
              $location.path('dashboard');
            }, function (err) {
              scope.error = "Could not find summoner: " + name;
            });
        };

        scope.$watch(function () {
          return UserService.getUserInfo();
        }, function (newVal) {
          scope.user = newVal;
        });
      }
    };
  });
