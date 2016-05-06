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
          if(scope.registerUsername.length < 3) {
            scope.registerError = 'Username must be at least 3 characters';
            return;
          }
          if(scope.registerPassword !== scope.registerPasswordRep) {
            scope.registerError = 'Passwords must match';
            return;
          }
          if(scope.registerPassword.length < 5){
            scope.registerError = 'Password must be at least 5 characters';
            return;
          }
          if(typeof scope.registerEmail === 'undefined'){
            scope.registerError = 'This is not a valid email address';
            return;
          }

          scope.registerError = '';
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
            if(response.data.ok){
              $location.path('dashboard');
            }
          })
          .catch(function (err) {
            scope.error = '';
            console.log(err);
            switch (err.status) {
              case 400:
                scope.error = err.data.message;
                break;
              case -1:
                scope.error = 'Could not connect to the server';
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
