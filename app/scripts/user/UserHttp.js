"use strict";

angular
  .module('lolanalyticsApp')
  .service('UserHttp', function (
    $http,
    CONFIG
  ) {
    this.getSummonerId = function (name) {
      return $http({
        url: 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+ name +'?api_key=' + CONFIG.API_KEY,
        method: 'GET'
      });
    };
  });
