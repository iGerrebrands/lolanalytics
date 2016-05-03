"use strict";

angular
  .module('lolanalyticsApp')
  .directive('summoner', function (
  ) {
      return {
        restrict: 'A',
        templateUrl: './scripts/summoner/SummonersView.html',
        scope: {ids: '='},
        link: function (scope) {

          
          // scope.$watch(function () {
          //   return UserService.getUserInfo();
          // }, function (newVal) {
          //   scope.user = newVal;
          //   if(newVal !== null)
          //     scope.icon = 'http://ddragon.leagueoflegends.com/cdn/6.8.1/img/profileicon/' + newVal.profileIconId + '.png'
          // });

        }
      };
  });
