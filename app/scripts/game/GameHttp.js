"use strict";

angular
  .module('lolanalyticsApp')
  .service('GameHttp', function (
    $http,
    CONFIG
  ) {
    
    this.getGameStatus = function (id) {
      return $http({
        url: 'https://euw.api.pvp.net/api/lol/euw/v1.3/game/by-summoner/' + id + '/recent?api_key=' + CONFIG.API_KEY,
        method: 'GET'
      });
    };


  });
