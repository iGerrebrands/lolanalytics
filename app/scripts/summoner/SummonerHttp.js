"use strict";

angular
  .module('lolanalyticsApp')
  .service('SummonerHttp', function (
    $http,
    CONFIG
  ) {
    this.getSummonerInfo = function (id) {
      return $http({
        url: CONFIG.API_URL + '/summoner/by-id/' + id,
        method: 'GET'
      });
    };
  });
