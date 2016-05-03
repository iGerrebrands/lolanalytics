"use strict";

angular
  .module('lolanalyticsApp')
  .service('RegisterHttp', function (
    $http,
    CONFIG
  ){
    this.register = function (obj) {
      return $http({
        url: CONFIG.REGISTER_URL,
        method: 'POST',
        data: obj
      });
    };
  });
