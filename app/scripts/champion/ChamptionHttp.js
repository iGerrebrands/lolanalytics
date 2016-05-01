"use strict";

angular
  .module('lolanalyticsApp')
  .service('ChampionHttp', function (
    $http,
    CONFIG
  ) {
    this.getChampById = function (id) {
      return $http({
        url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/' + id + '?&api_key=' + CONFIG.API_KEY,
        method: 'GET'
      });
    };
  });
