'use strict';

/**
 * @ngdoc overview
 * @name lolanalyticsApp
 * @description
 * # lolanalyticsApp
 *
 * Main module of the application.
 */
angular
  .module('lolanalyticsApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'satellizer'
  ])
  .config(function (
    $routeProvider,
    $authProvider,
    CONFIG
  ) {
    $authProvider.loginUrl = CONFIG.AUTH_URL;
    $authProvider.authToken = '';

    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main.html'
      })
      .when('/dashboard', {
        templateUrl: 'scripts/dashboard/dashboard.html',
        controller: 'DashboardController',
        loggedIn: true
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function (
    $location,
    $rootScope,
    $auth,
    $http
  ) {

    $rootScope.$on('$routeChangeSuccess', function (angularEvent, current) {
        if (current.loggedIn && !$auth.isAuthenticated()) {
          $location.path('/');
        }
    });
  });
