"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoner', function (
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/summoner/SummonerView.html',
      scope: {data: '='},
      link: function (scope) {
        scope.summoner = scope.data;

        scope.$watch('summoner', function (newVal) {
          scope.user = newVal;
          if(newVal !== null && typeof newVal !== 'undefined')
            scope.icon = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/profileicon/' + newVal.profileIconId + '.png'
        });
      }
    };
  });
