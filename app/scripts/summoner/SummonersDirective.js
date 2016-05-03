"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoners', function (
    $auth
  ) {
      return {
        restrict: 'A',
        templateUrl: './scripts/summoner/SummonersView.html',
        scope: {ids: '='},
        link: function (scope) {
          scope.summonerIds = $auth.getPayload().user.summoners;
        }
      };
  });
