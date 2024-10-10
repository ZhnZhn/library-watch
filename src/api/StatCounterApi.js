
const OS_VERSION_MARKET_SHARE = "os-version-market-share"
, DESKTOP = "desktop"
, MOBILE_TABLET = "mobile-tablet";


const API_URL = 'https://gs.statcounter.com'
, OS_DESKTOP_PATH = `os-market-share/${DESKTOP}`
, WIN_DESKTOP_PATH = `${OS_VERSION_MARKET_SHARE}/windows/${DESKTOP}`
, MAC_DESKTOP_PATH = `${OS_VERSION_MARKET_SHARE}/macos/${DESKTOP}`
, ANDROID_MOBILE_PATH = `${OS_VERSION_MARKET_SHARE}/android/${MOBILE_TABLET}`
, IOS_MOBILE_PATH = `${OS_VERSION_MARKET_SHARE}/ios/${MOBILE_TABLET}`
, SOCIAL_MEDIA_PATH = "social-media-stats";

const DEVICE_DESKTOP = "device=Desktop&device_hidden=desktop"
, GRANULARTY_MONTHLY = "granularity=monthly"
, CSV = "csv=1"
, DEVICE_MOBILE_TABLET = "device=Mobile%20%26%20Tablet&device_hidden=mobile%2Btablet&multi-device=true"
, DEVICE_MOBILE_TABLET_CONSOLE = "device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true";

const HM_URL = {
  "os": {
    csv: `${API_URL}/chart.php?device=Desktop%20%26%20Mobile%20%26%20Tablet%20%26%20Console&device_hidden=desktop%2Bmobile%2Btablet%2Bconsole&multi-device=true&statType_hidden=os_combined&granularity=monthly&statType=Operating%20System&${CSV}`,
    link: `${API_URL}/os-market-share/`
  },

  "os-desktop": {
    csv: `${API_URL}/${OS_DESKTOP_PATH}/chart.php?${DEVICE_DESKTOP}&statType_hidden=os_combined&${GRANULARTY_MONTHLY}&statType=Operating%20System&${CSV}`,
    link: `${API_URL}/${OS_DESKTOP_PATH}/`
  },

  "win-desktop": {
    csv: `${API_URL}/${WIN_DESKTOP_PATH}/chart.php?${DEVICE_DESKTOP}&statType_hidden=windows_version&${GRANULARTY_MONTHLY}&statType=Windows%10Version&${CSV}`,
    link: `${API_URL}/${WIN_DESKTOP_PATH}/`
  },
  "mac-desktop": {
    csv: `${API_URL}/${MAC_DESKTOP_PATH}/chart.php?${DEVICE_DESKTOP}&statType_hidden=macos_version&${GRANULARTY_MONTHLY}&statType=macOS%20Version&${CSV}`,
    link: `${API_URL}/${MAC_DESKTOP_PATH}/`
  },
  "android-mobile": {
    csv: `${API_URL}/${ANDROID_MOBILE_PATH}/chart.php?${DEVICE_MOBILE_TABLET}&statType_hidden=android_version&${GRANULARTY_MONTHLY}&statType=Android%20Version&${CSV}`,
    link: `${API_URL}/${ANDROID_MOBILE_PATH}/`
  },
  "ios-mobile": {
    csv: `${API_URL}/${IOS_MOBILE_PATH}/chart.php?${DEVICE_MOBILE_TABLET}&statType_hidden=ios_version&${GRANULARTY_MONTHLY}&statType=iOS%20Version&${CSV}`,
    link: `${API_URL}/${IOS_MOBILE_PATH}/`
  },
  "browser": {
    csv: `${API_URL}/chart.php?${DEVICE_MOBILE_TABLET_CONSOLE}&statType_hidden=browser&${GRANULARTY_MONTHLY}&statType=Browser&${CSV}`,
    link: `${API_URL}/browser-market-share/all/`
  },
  "social-media": {
    csv: `${API_URL}/chart.php?${DEVICE_MOBILE_TABLET_CONSOLE}&statType_hidden=social_media&region_hidden=ww&${GRANULARTY_MONTHLY}&statType=Social%20Media&${CSV}`,
    link: `${API_URL}${SOCIAL_MEDIA_PATH}/`
  }
};

const _isArr = Array.isArray;

let _periodQuery = null;
const _crPeriodQuery = () => {
  const _d = new Date()
  , _m = _d.getUTCMonth()
  , _strM = _m < 10 ? '0'+_m : ''+_m
  , _toY = _d.getUTCFullYear()
  , _fromY = _toY - 2;
  return _periodQuery
     || ( _periodQuery = `fromInt=${_fromY}${_strM}&toInt=${_toY}${_strM}&fromMonthYear=${_fromY}-${_strM}&toMonthYear=${_toY}-${_strM}`);
};

const _crLinks = (option) => {
  const { value, region={} } = option
  , _urlItem = HM_URL[value]
  , _periodQuery = _crPeriodQuery();
  return {
    csv: `${_urlItem.csv}&region=${region.caption}&region_hidden=${region.v2}&${_periodQuery}`,
    link: `${_urlItem.link}${region.value}`
  };
};

const StatCounterApi = {
  getRequestUrl: (option) => {
    const { csv, link } =_crLinks(option)
    option.fetchType = 'csv-stream'
    option.sourceLink = link
    return csv;
  },


  crKey: (option) => {
    const { value, region } = option
    , { value: vRegion='' } = region || {};
    return `${vRegion}-${value}`;
  },

  getOnCheckResponse: () => {
    return StatCounterApi.checkResponse;
  },

  checkResponse: (json, option) => {
    return json && _isArr(json.data);
  }
};

export default StatCounterApi
