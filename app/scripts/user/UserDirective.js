"use strict";

angular
  .module('lolanalyticsApp')
  .directive('user', function (
    UserService,
    UserHttp,
    $location,
    $auth
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

        scope.login = function () {
          $auth.login({
            name: scope.username,
            password: scope.password
          })
          .then(function (response) {
            //console.log(response);
            $location.path('dashboard');
          })
          .catch(function (err) {
            scope.error = '';
            switch (err.status) {
              case 401:
                scope.error = 'Invalid login information';
                break;
              case 408:
                scope.error = 'Request timed out! (Error 408)';
                break;
              case 415:
                scope.error = 'The server is temporarily unavailable. (Error 415)';
                break;
              default:
                scope.error = 'Something went wrong, contact administrator. ';
                break;
            }
            $location.path('/');
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
