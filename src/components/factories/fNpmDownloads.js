import fNpm from './fNpm';
import { isWeekend } from '../../utils/dateFn';

const MAX_ITEMS = 30;

const _trimRecentZeroValue = (
  data,
  labels
) => {
  const _indexRecent = data.length-1;
  if (_indexRecent >= 0 && data[_indexRecent] === 0) {
    data.splice(_indexRecent)
    labels.splice(_indexRecent)
  }
};

/* Irregular Time Inrevals */
const _transformDownloads = (
  downloads=[{ day: '1970-01-01', downloads : 0}]
) => {
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
      const {
        day:date,
        downloads:value
      } = item
      , [y, m, d] = date.split('-');

      if ( index % itemStep === 0) {
         if ( !isWeekend(y, m, d) ){
           labels.push(`${m}-${d}`);
           data.push(value);
         } else if (index-2>-1) {
           const item = downloads[index-2]
           , { day:date, downloads:value } = item
           /* eslint-disable no-unused-vars */
           , [y, m, d] = date.split('-');
           /* eslint-disable no-unused-vars */
           labels.push(`${m}-${d}`);
           data.push(value);
         }
      }
      sumDownloads += value;
    })

    _trimRecentZeroValue(data, labels)

    return {
      sumDownloads,
      fromDate,
      toDate,
      labels,
      data
    };
};

const fNpmDownloads = fNpm(_transformDownloads);

export default fNpmDownloads
