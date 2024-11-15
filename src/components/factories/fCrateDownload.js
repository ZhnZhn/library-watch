import {
  isNumber,
  isStr,
  bindTo
} from '../uiApi';
import CrateDownloads from '../items/crate/CrateDownloads';

const _getDate = item => (item || {}).date;
const _getDownloads = item => (item || {}).downloads;

const _crLabel = (date) => {
  const _dateTokens = date.split("-");
  return _dateTokens.length === 3
    ? `${_dateTokens[1]}-${_dateTokens[2]}`
    : date;
};

const fCrateDownload = (
  options
) => {
  const {
    createElement,
    option,
    json,
    onCloseItem
  } = options
  , {
    repo,
    chartType,
    browserType,
    key
  } = option
  , labels = []
  , data = []
  , _downloads = json.meta.extra_downloads
  , _downloadsLength = _downloads.length  
  let sumDownloads = 0;
  for (const item of _downloads) {
    const _value = _getDownloads(item)
    , _strDate = _getDate(item);
    if (isNumber(_value) && isStr(_strDate)) {
      labels.push(_crLabel(_strDate))
      data.push(_value)
      sumDownloads += _value
    }
  }
  return createElement(CrateDownloads, {
    key,
    caption: repo,
    packageName: repo,
    fromDate: _downloadsLength !== 0
      ? _getDate(_downloads[0])
      : "",
    toDate: _downloadsLength > 0
      ? _getDate(_downloads[_downloadsLength-1])
      : "",
    sumDownloads,
    labels,
    data,
    onCloseItem: bindTo(onCloseItem, chartType, browserType, key),
  });
};

export default fCrateDownload
