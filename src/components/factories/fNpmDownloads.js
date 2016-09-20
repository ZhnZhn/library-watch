
import DateUtils from '../../utils/DateUtils';

import NpmRecentMonthDownloads from '../items/NpmRecentMonthDownloads';

const MAX_ITEMS = 30;

const _fnTransformDownloads = (downloads=[{ day: '0-0-0', downloads : 0}]) => {
    const labels = []
        , data = []
        , itemLen = downloads.length
        , fromDate = downloads[0].day
        , toDate = downloads[itemLen-1].day
        , itemStep = (itemLen > MAX_ITEMS)
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

      sumDownloads = sumDownloads + value;
    })

    return {sumDownloads, fromDate, toDate, labels, data};
}

const fNpmDownloads = function({
  factory, option, json, parentProps, onCloseItem, onWatchItem
}){
  const { repo, requestType, chartType, browserType } = option
      , { downloads } = json
      , { sumDownloads, fromDate, toDate, labels, data } = _fnTransformDownloads(downloads)
      , key = `${repo}_${requestType}_${fromDate}`

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
     //onWatchItem : onWatchItem,
     ...parentProps
  })
};

export default fNpmDownloads
