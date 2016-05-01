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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main.html'
      })
      .when('/dashboard', {
        templateUrl: 'scripts/dashboard/dashboard.html',
        controller: 'DashboardController',
        summonerRequired: true
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function (
    UserService,
    $location,
    $rootScope
  ) {
    $rootScope.$on('$routeChangeSuccess', function (angularEvent, current) {
        if (current.summonerRequired && UserService.getUserInfo() === null) {
          $location.path('/');
        }
    });
  });
