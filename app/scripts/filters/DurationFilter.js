"use strict";

angular
  .module('lolanalyticsApp')
  .filter('msToMinutes', function () {
    return function (input) {
      var inputSeconds = parseInt(input);
      var minutes = Math.floor(input / 60) < 10 ? '0' + Math.floor(input / 60) : Math.floor(input / 60);
      var seconds = inputSeconds % 60 < 10 ? '0' + inputSeconds % 60 : inputSeconds % 60;

      return minutes + ':' + seconds;
    };
  });
