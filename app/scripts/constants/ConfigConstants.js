"use strict";

angular
  .module('lolanalyticsApp')
  .constant('CONFIG', {
    API_URL: 'http://localhost:6001/api',
    AUTH_URL: 'http://localhost:6001/api/user/login'
  });
