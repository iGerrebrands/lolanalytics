"use strict";

angular
  .module('lolanalyticsApp')
  .directive('addSummoner', function (
    SummonerService
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/summoner/AddSummonerView.html',
      scope: {},
      link: function (scope) {
        scope.add = function () {
          SummonerService.addSummoner(scope.name, function (message) {
            scope.message = message;
          });
        };
      }
    }
  });
