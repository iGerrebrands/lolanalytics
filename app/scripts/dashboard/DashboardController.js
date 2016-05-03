"use strict";

angular
  .module('lolanalyticsApp')
  .controller('DashboardController', function (
    $scope,
    $auth
  ) {
    $scope.active = 'summoners';
    $scope.user = $auth.getPayload().user;

    $scope.navigate = function (url) {
      $scope.active = url;
    };

  });
