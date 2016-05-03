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
        console.log(scope.id);
        SummonerHttp.getSummonerInfo(scope.id)
          .then(function(res) {
            scope.summoner = res.data[scope.id];
          });

        scope.$watch('summoner', function (newVal) {
          scope.user = newVal;
          if(newVal !== null)
            scope.icon = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/profileicon/' + newVal.profileIconId + '.png'
        });
      }
    };
  });
