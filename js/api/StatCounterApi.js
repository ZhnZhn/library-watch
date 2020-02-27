"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var C = {
  URL: 'https://gs.statcounter.com/',
  WIN_DESKTOP: 'os-version-market-share/windows/desktop/',
  MAC_DESKTOP: 'os-version-market-share/macos/desktop/',
  ANDROID_MOBILE: 'os-version-market-share/android/mobile-tablet/',
  IOS_MOBILE: 'os-version-market-share/ios/mobile-tablet/'
};
var HM_URL = {
  "os": {
    //csv: `${C.URL}chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=os_combined&region_hidden=ww&granularity=monthly&statType=Operating%20System&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    csv: C.URL + "chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=os_combined&granularity=monthly&statType=Operating%20System&csv=1",
    link: C.URL + "os-market-share/" //'https://gs.statcounter.com/chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=os_combined&region_hidden=ww&granularity=monthly&statType=Operating%20System&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1',

  },
  "win-desktop": {
    //csv: `${C.URL}${C.WIN_DESKTOP}chart.php?device=Desktop&device_hidden=desktop&statType_hidden=windows_version&region_hidden=ww&granularity=monthly&statType=Windows%10Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    csv: "" + C.URL + C.WIN_DESKTOP + "chart.php?device=Desktop&device_hidden=desktop&statType_hidden=windows_version&granularity=monthly&statType=Windows%10Version&csv=1",
    link: "" + C.URL + C.WIN_DESKTOP //'https://gs.statcounter.com/os-version-market-share/windows/desktop/chart.php?device=Desktop&device_hidden=desktop&statType_hidden=windows_version&region_hidden=ww&granularity=monthly&statType=Windows%10Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1'

  },
  "mac-desktop": {
    //csv: `${C.URL}${C.MAC_DESKTOP}chart.php?device=Desktop&device_hidden=desktop&statType_hidden=macos_version&region_hidden=ww&granularity=monthly&statType=macOS%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    csv: "" + C.URL + C.MAC_DESKTOP + "chart.php?device=Desktop&device_hidden=desktop&statType_hidden=macos_version&granularity=monthly&statType=macOS%20Version&csv=1",
    link: "" + C.URL + C.MAC_DESKTOP //'https://gs.statcounter.com/os-version-market-share/macos/desktop/chart.php?device=Desktop&device_hidden=desktop&statType_hidden=macos_version&region_hidden=ww&granularity=monthly&statType=macOS%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1',

  },
  "android-mobile": {
    //csv: `${C.URL}${C.ANDROID_MOBILE}chart.php?device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=android_version&region_hidden=ww&granularity=monthly&statType=Android%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    csv: "" + C.URL + C.ANDROID_MOBILE + "chart.php?device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=android_version&granularity=monthly&statType=Android%20Version&csv=1",
    link: "" + C.URL + C.ANDROID_MOBILE //'https://gs.statcounter.com/os-version-market-share/android/mobile-tablet/chart.php?device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=android_version&region_hidden=ww&granularity=monthly&statType=Android%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1',

  },
  "ios-mobile": {
    //csv: `${C.URL}${C.IOS_MOBILE}chart.php?device=Mobile%-49%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=ios_version&region_hidden=US&granularity=monthly&statType=iOS%20Version&region=ww&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    csv: "" + C.URL + C.IOS_MOBILE + "chart.php?device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=ios_version&granularity=monthly&statType=iOS%20Version&csv=1",
    link: "" + C.URL + C.IOS_MOBILE //'https://gs.statcounter.com/os-version-market-share/ios/mobile-tablet/chart.php?device=Mobile%-49%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=ios_version&region_hidden=US&granularity=monthly&statType=iOS%20Version&region=ww&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1'

  },
  "browser": {
    //csv: `${C.URL}chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=browser&region_hidden=ww&granularity=monthly&statType=Browser&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    csv: C.URL + "chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=browser&granularity=monthly&statType=Browser&csv=1",
    link: C.URL + "browser-market-share/all/"
  }
};
var _isArr = Array.isArray;
var _periodQuery = null;

var _crPeriodQuery = function _crPeriodQuery() {
  var _d = new Date(),
      _m = _d.getUTCMonth(),
      _strM = _m < 10 ? '0' + _m : '' + _m,
      _toY = _d.getUTCFullYear(),
      _fromY = _toY - 2;

  return _periodQuery || (_periodQuery = "fromInt=" + _fromY + _strM + "&toInt=" + _toY + _strM + "&fromMonthYear=" + _fromY + "-" + _strM + "&toMonthYear=" + _toY + "-" + _strM);
};

var _crLinks = function _crLinks(option) {
  var value = option.value,
      _option$region = option.region,
      region = _option$region === void 0 ? {} : _option$region,
      _urlItem = HM_URL[value],
      _periodQuery = _crPeriodQuery();

  return {
    csv: _urlItem.csv + "&region=" + region.caption + "&region_hidden=" + region.v2 + "&" + _periodQuery,
    link: "" + _urlItem.link + region.value
  };
};

var StatCounterApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _crLinks2 = _crLinks(option),
        csv = _crLinks2.csv,
        link = _crLinks2.link;

    option.fetchType = 'csv-stream';
    option.sourceLink = link;
    return csv;
  },
  crKey: function crKey(option) {
    var value = option.value,
        region = option.region,
        _ref = region || {},
        _ref$value = _ref.value,
        vRegion = _ref$value === void 0 ? '' : _ref$value;

    return vRegion + "-" + value;
  },
  getOnCheckResponse: function getOnCheckResponse() {
    return StatCounterApi.checkResponse;
  },
  checkResponse: function checkResponse(json, option) {
    return json && _isArr(json.data);
  }
};
var _default = StatCounterApi;
exports["default"] = _default;
//# sourceMappingURL=StatCounterApi.js.map