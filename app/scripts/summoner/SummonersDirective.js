"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoners', function (
    $auth,
    SummonerHttp
  ) {
      return {
        restrict: 'A',
        templateUrl: './scripts/summoner/SummonersView.html',
        scope: {ids: '='},
        link: function (scope) {
          scope.summonerIds = [];
          SummonerHttp.getUsersSummoners()
            .then(function (res) {
              scope.summonerIds = res.data.summoners;
            });
        }
      };
  });
