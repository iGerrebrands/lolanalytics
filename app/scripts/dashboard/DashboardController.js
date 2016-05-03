"use strict";

angular
  .module('lolanalyticsApp')
  .controller('DashboardController', function (
    $scope,
    UserService,
    $auth
  ) {
    $scope.active = 'summoners';
    $scope.user = UserService.getUserInfo();
    $scope.summonerIds = $auth.getPayload().user.summoners;

    $scope.navigate = function (url) {
      $scope.active = url;
    };

  });
