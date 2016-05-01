"use strict";

angular
  .module('lolanalyticsApp')
  .service('UserService', function () {
    var user = null;

    this.setUserInfo = function (userObj) {
      user = userObj;
    };

    this.getUserInfo = function () {
      return user;
    };

  });
