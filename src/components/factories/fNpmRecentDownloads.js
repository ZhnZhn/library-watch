
import NpmRecentMonthDownloads from '../items/NpmRecentMonthDownloads';

const _fnTransformDownloads = (downloads=[{ day: '0-0-0', downloads : 0}]) => {
    const labels = []
        , data = []
        , fromDate = downloads[0].day
        , toDate = downloads[downloads.length-1].day
    let sumDownloads = 0;

    downloads.forEach((item) => {
      const { day, downloads } = item
          , arrDate = day.split('-');

      labels.push(`${arrDate[2]}`);
      data.push(downloads);
      sumDownloads = sumDownloads + downloads;
    })

    return {sumDownloads, fromDate, toDate, labels, data};
}

const fNpmRecentDownloads = function({
  factory, option, json, parentProps, onCloseItem, onWatchItem
}){
  const { repo, requestType, chartType, browserType } = option
      , { downloads } = json
      , { sumDownloads, fromDate, toDate, labels, data } = _fnTransformDownloads(downloads)
      , key = `${repo}_${requestType}`
    
  return factory.createElement(NpmRecentMonthDownloads, {
     key : key,
     packageName : json.package,
     requestType : requestType,
     caption : json.package,
     sumDownloads : sumDownloads,
     fromDate : fromDate,
     toDate : toDate,
     labels : labels,
     data : data,
     onCloseItem : onCloseItem.bind(null, chartType, browserType, key),
     onWatchItem : onWatchItem,
     ...parentProps
  })
};

export default fNpmRecentDownloads
