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

    this.getUsersSummoners = function () {
      return $http({
        url: CONFIG.API_URL + '/user/summoners',
        method: 'GET'
      });
    };

    this.addSummoner = function (name) {
      return $http({
        url: CONFIG.API_URL + '/user/summoner/',
        method: 'POST',
        data: {name: name}
      });
    };
  });
