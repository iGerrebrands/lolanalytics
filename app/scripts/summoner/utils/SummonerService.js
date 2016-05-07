"use strict";

angular
  .module('lolanalyticsApp')
  .service('SummonerService', function (
    SummonerHttp
  ) {
    var summoners = [];
    var self = this;

    this.getSummoners = function () {
      return summoners;
    };

    this.updateSummoners = function (callback) {
      SummonerHttp.getUsersSummoners()
        .then(function (res) {
          summoners = res.data.summoners;
          callback(true);
        }, function (err) {
          if(err.status === -1){
            callback(false);
          }
        });
    };

    this.addSummoner = function (name, callback) {
      SummonerHttp
        .addSummoner(name)
        .then(function (res) {
          self.updateSummoners(function (ok) {
            if(!ok) {
              callback('Connection lost');
              return;
            }
            callback(res.data.message);
          });
        }, function (err) {
            callback(err.data.message);
        });
    };

    this.deleteSummoner = function (id, region) {
      SummonerHttp
        .deleteSummoner(id, region)
        .then(function (res) {
          self.updateSummoners(function (ok) {});
        }, function (err) {console.log(err);});
    };

    this.syncSummoner = function (id, region) {
      //HTTP request to sync send id and region
    };

  });
