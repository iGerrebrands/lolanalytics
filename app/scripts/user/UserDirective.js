"use strict";

angular
  .module('lolanalyticsApp')
  .directive('user', function (
    $location,
    $auth,
    RegisterHttp
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/user/UserView.html',
      scope: {},
      link: function (scope) {
        scope.registerShow = false;

        scope.toggleRegister = function () {
          scope.registerShow = !scope.registerShow;
        };

        scope.register = function () {
          // TODO: Validate data

          var data = {
            name: scope.registerUsername,
            password: scope.registerPassword,
            email: scope.registerEmail
          };

          RegisterHttp.register(data)
            .then(function (res) {
              scope.registerError = res.data.message;
            });
        };

        scope.login = function () {
          $auth.login({
            name: scope.username,
            password: scope.password
          })
          .then(function (response) {
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
      }
    };
  });
