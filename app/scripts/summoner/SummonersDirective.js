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
          scope.connection = true;
          SummonerHttp.getUsersSummoners()
            .then(function (res) {
              scope.summoners = res.data.summoners;
            }, function (err) {
              if(err.status === -1){
                scope.connection = false;
              }
            });
        }
      };
  });
