"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoner', function (
    UserService
  ) {
      return {
        restrict: 'A',
        templateUrl: './scripts/summoner/SummonerView.html',
        scope: {ids: '='},
        link: function (scope) {
          //for more summoner info
          //https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/19565074/summary?season=SEASON2016&api_key=ce1ae5c2-c12c-4a40-9dd0-0147d8db0db0
          console.log(scope.ids)
          scope.$watch(function () {
            return UserService.getUserInfo();
          }, function (newVal) {
            scope.user = newVal;
            if(newVal !== null)
              scope.icon = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/profileicon/' + newVal.profileIconId + '.png'
          });

        }
      };
  });
