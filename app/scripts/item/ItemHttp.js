"use strict";

angular
  .module('lolanalyticsApp')
  .service('ItemHttp', function (
    $http,
    CONFIG
  ) {
    this.getItemById = function (id) {
      return $http({
        url: 'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/item/' + id + '?itemData=image&api_key=' + CONFIG.API_KEY,
        method: 'GET'
      });
    };
  });
