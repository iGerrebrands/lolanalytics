"use strict";

angular
  .module('lolanalyticsApp')
  .directive('game', function (
    ChampionHttp
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/game/single/GameView.html',
      scope: {data: '='},
      link: function (scope) {
        scope.game = scope.data;
        scope.image = null;
        scope.items = [];

        for (var i = 0; i < 7; i++) {
          scope.items.push('http://ddragon.leagueoflegends.com/cdn/6.8.1/img/item/' + scope.game.stats['item'+i] + '.png');
        }

        ChampionHttp.getChampById(scope.game.championId)
          .then(function (res) {
            scope.image = 'http://ddragon.leagueoflegends.com/cdn/6.9.1/img/champion/' + res.data.key + '.png';
          },function (err) {
            console.log("Could not find image for champion?!");
          });

      }
    };
  });
