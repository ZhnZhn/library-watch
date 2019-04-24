
import DateUtils from '../../utils/DateUtils';

import NpmRecentMonthDownloads from '../items/NpmRecentMonthDownloads';

const MAX_ITEMS = 30;

/* Irregular Time Inrevals */
const _fnTransformDownloads = (downloads=[{ day: '1970-01-01', downloads : 0}]) => {
    const labels = []
        , data = []
        , itemLen = downloads.length
        , fromDate = downloads[0].day
        , toDate = itemLen > 0
            ? downloads[itemLen-1].day
            : fromDate
        , itemStep = itemLen > MAX_ITEMS
            ? Math.round(itemLen/MAX_ITEMS)
            : 1;
    let sumDownloads = 0;

    downloads.forEach((item, index) => {
      const { day:date, downloads:value } = item
          , [ y, m, d ] = date.split('-');

      if ( index % itemStep === 0) {
         if ( !DateUtils.isWeekend(y, m, d) ){
           labels.push(`${m}-${d}`);
           data.push(value);
         } else if (index-2>-1) {
           const item = downloads[index-2]
              , { day:date, downloads:value } = item
           /* eslint-disable no-unused-vars */
              , [ y, m, d ] = date.split('-');
           /* eslint-disable no-unused-vars */
           labels.push(`${m}-${d}`);
           data.push(value);
         }
      }

      sumDownloads += value;
    })

    return {sumDownloads, fromDate, toDate, labels, data};
}


const fNpmDownloads = function({
  factory, option, json, parentProps,
  onMoveToTop, onCloseItem,
  onWatchItem
}){
  const { repo, requestType, chartType, browserType, key } = option
  , { downloads, package:packageName } = json
  , { sumDownloads, fromDate, toDate, labels, data } = _fnTransformDownloads(downloads)

  return factory.createElement(NpmRecentMonthDownloads, {
     key,
     packageName,
     caption: packageName,
     requestType,
     sumDownloads,
     fromDate,
     toDate,
     labels,
     data,
     onMoveToTop,
     onCloseItem: onCloseItem.bind(null, chartType, browserType, key),     
     ...parentProps
  })
};

export default fNpmDownloads
