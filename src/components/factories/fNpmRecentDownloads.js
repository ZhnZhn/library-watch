
import NpmDownloads from '../items/npm/NpmDownloads';

const _transformDownloads = (
  downloads=[{ day: '0-0-0', downloads: 0}]
) => {
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

    return {
      sumDownloads,
      fromDate,
      toDate,
      labels,
      data
    };
};

const fNpmRecentDownloads = function({
  factory,
  option,
  json,
  parentProps,
  onCloseItem,
  onWatchItem
}){
  const {
    requestType,
    chartType,
    browserType,
    key,
    packageLink
  } = option
  , {
    downloads
  } = json
  , {
    sumDownloads,
    fromDate,
    toDate,
    labels,
    data
  } = _transformDownloads(downloads);

  return factory.createElement(NpmDownloads, {
     key,
     packageName: json.package,
     caption: json.package,
     packageLink,
     requestType,
     sumDownloads,
     fromDate,
     toDate,
     labels,
     data,
     onCloseItem: onCloseItem.bind(null, chartType, browserType, key),
     onWatchItem: onWatchItem,
     ...parentProps
  })
};

export default fNpmRecentDownloads
