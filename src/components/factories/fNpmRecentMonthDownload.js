
import NpmRecentMonthDownload from '../items/NpmRecentMonthDownload';

const fNpmRecentMonthDownload = function({
  factory, option, json, parentProps, onCloseItem
}){
  const { repo, requestType, chartType, browserType } = option
      , { downloads, start, end } = json
      , key = `${repo}_${requestType}`

  return factory.createElement(NpmRecentMonthDownload, {
     key : key,
     packageName : json.package,
     downloads : downloads,
     start : start,
     end : end,
     caption : downloads,
     onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
     ...parentProps
  })
};

export default fNpmRecentMonthDownload
