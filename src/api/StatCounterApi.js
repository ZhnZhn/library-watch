
const C = {
  URL: 'https://gs.statcounter.com/',
  WIN_DESKTOP: 'os-version-market-share/windows/desktop/',
  MAC_DESKTOP: 'os-version-market-share/macos/desktop',
  ANDROID_MOBILE: 'os-version-market-share/android/mobile-tablet',
  IOS_MOBILE: 'os-version-market-share/ios/mobile-tablet',


};

const HM_URL = {
  "os": {
    csv: `${C.URL}chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=os_combined&region_hidden=ww&granularity=monthly&statType=Operating%20System&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    link: `${C.URL}os-market-share`
    //'https://gs.statcounter.com/chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=os_combined&region_hidden=ww&granularity=monthly&statType=Operating%20System&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1',
  },

  "win-desktop": {
    csv: `${C.URL}${C.WIN_DESKTOP}chart.php?device=Desktop&device_hidden=desktop&statType_hidden=windows_version&region_hidden=ww&granularity=monthly&statType=Windows%10Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    link: `${C.URL}${C.WIN_DESKTOP}worlwide`
  //'https://gs.statcounter.com/os-version-market-share/windows/desktop/chart.php?device=Desktop&device_hidden=desktop&statType_hidden=windows_version&region_hidden=ww&granularity=monthly&statType=Windows%10Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1'
  },
  "mac-desktop": {
    csv: `${C.URL}${C.MAC_DESKTOP}chart.php?device=Desktop&device_hidden=desktop&statType_hidden=macos_version&region_hidden=ww&granularity=monthly&statType=macOS%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    link: `${C.URL}${C.MAC_DESKTOP}worlwide`
    //'https://gs.statcounter.com/os-version-market-share/macos/desktop/chart.php?device=Desktop&device_hidden=desktop&statType_hidden=macos_version&region_hidden=ww&granularity=monthly&statType=macOS%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1',
  },
  "android-mobile": {
    csv: `${C.URL}${C.ANDROID_MOBILE}chart.php?device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=android_version&region_hidden=ww&granularity=monthly&statType=Android%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    link: `${C.URL}${C.ANDROID_MOBILE}worlwide`
    //'https://gs.statcounter.com/os-version-market-share/android/mobile-tablet/chart.php?device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=android_version&region_hidden=ww&granularity=monthly&statType=Android%20Version&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1',
  },
  "ios-mobile": {
    csv: `${C.URL}${C.IOS_MOBILE}chart.php?device=Mobile%-49%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=ios_version&region_hidden=US&granularity=monthly&statType=iOS%20Version&region=ww&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    link: `${C.URL}${C.IOS_MOBILE}worlwide`
    //'https://gs.statcounter.com/os-version-market-share/ios/mobile-tablet/chart.php?device=Mobile%-49%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true&statType_hidden=ios_version&region_hidden=US&granularity=monthly&statType=iOS%20Version&region=ww&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1'
  },
  "browser": {
    csv: `${C.URL}chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=browser&region_hidden=ww&granularity=monthly&statType=Browser&region=Worldwide&fromInt=201807&toInt=201907&fromMonthYear=2018-07&toMonthYear=2019-07&csv=1`,
    linl: `${C.URL}browser-market-share`
  }
};

const _isArr = Array.isArray;

const StatCounterApi = {
  getRequestUrl: (option) => {
    const { value } = option
    , urlItem = HM_URL[value];
    option.fetchType = 'csv-stream'
    option.sourceLink = urlItem.link
    return urlItem.csv;
  },


  crKey: (option) => {
    return option.value;
  },

  getOnCheckResponse: () => {
    return StatCounterApi.checkResponse;
  },

  checkResponse: (json, option) => {
    return json && _isArr(json.data);
  }
};

export default StatCounterApi
