"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoners', function (
    SummonerService
  ) {
      return {
        restrict: 'A',
        templateUrl: './scripts/summoner/list/SummonersView.html',
        scope: {ids: '='},
        link: function (scope) {
          scope.summonerIds = [];
          scope.connection = true;

          SummonerService.updateSummoners(function (ok) {
            if(!ok) {
              scope.connection = false;
            }
          });

          scope.$watch(function () {
            return SummonerService.getSummoners();
          }, function (newVal) {
            scope.summoners = newVal;
          });

        }
      };
  });
