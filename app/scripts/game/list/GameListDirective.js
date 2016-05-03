"use strict";

angular
  .module('lolanalyticsApp')
  .directive('gameList', function (
      //GameHttp,
  ) {
    return {
      restrict: 'A',
      templateUrl: './scripts/game/list/GameListView.html',
      scope: {},
      link: function (scope) {

        // if (UserService.getUserInfo() !== null) {
        //   GameHttp.getGameStatus(UserService.getUserInfo().id)
        //     .then(function (res) {
        //       scope.games = res.data.games;
        //       console.log(scope.games[7]);
        //     }, function (err) {
        //       console.log(status);
        //     });
        // }

      }
    }
  });
