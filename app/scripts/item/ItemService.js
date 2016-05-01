"use strict";

angular
  .module('lolanalyticsApp')
  .service('ItemService', function () {
    this.isBoot = function (id) {
      var boots = [1309, 1305, 1307, 1306, 1308, 1333, 1331, 1304, 1302, 1301, 1314, 1300, 1303, 1318, 1316, 1324, 1322, 1319, 1317, 1315, 1310, 1312, 1311, 1313, 1332, 1330, 1326, 1334, 1325, 1328, 1329, 1327, 1321, 1323, 1320];
      return _.contains(boots, id);
    };
  });
