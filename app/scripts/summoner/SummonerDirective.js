"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoner', function (
    SummonerHttp
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/summoner/SummonerView.html',
      scope: {id: '='},
      link: function (scope) {
        SummonerHttp.getSummonerInfo(scope.id)
          .then(function(res) {
            scope.summoner = res.data;
          });
      }
    };
  });
