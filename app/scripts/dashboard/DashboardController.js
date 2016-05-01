"use strict";

angular
  .module('lolanalyticsApp')
  .controller('DashboardController', function (
    $scope,
    UserService
  ) {
    $scope.active = 'summoners';
    $scope.user = UserService.getUserInfo();

    $scope.navigate = function (url) {
      $scope.active = url;
    };

  });
