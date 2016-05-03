"use strict";

angular
  .module('lolanalyticsApp')
  .directive('addSummoner', function (
    SummonerHttp
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/summoner/AddSummonerView.html',
      scope: {},
      link: function (scope) {
        scope.add = function () {
          SummonerHttp
            .addSummoner(scope.name)
            .then(function (res) {
              console.log(res);
                scope.message = 'Summoner added successfully!';
            }, function (err) {
              switch(err.statusCode) {
                default:
                  scope.message = err.data.message;
                  break;
              }
            });
        };
      }
    }
  });
