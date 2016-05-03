"use strict";

angular
  .module('lolanalyticsApp')
  .controller('DashboardController', function (
    $scope,
    $auth
  ) {
    $scope.active = 'summoners';
    $scope.user = $auth.getPayload().user;
    $scope.summonerIds = $auth.getPayload().user.summoners;

    $scope.navigate = function (url) {
      $scope.active = url;
    };

  });
