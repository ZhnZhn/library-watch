import { bindTo } from '../uiApi';
import CrateDownloads from '../items/crate/CrateDownloads';

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
  , _labelLength = labels.length;
  let sumDownloads = 0;
  for (const item of json.meta.extra_downloads) {
    labels.push(item.date)
    data.push(item.downloads)
    sumDownloads += item.downloads
  }
  return createElement(CrateDownloads, {
    key,
    caption: repo,
    packageName: repo,
    fromDate: _labelLength !== 0
      ? labels[0]
      : "",
    toDate: _labelLength > 0
      ? labels[labels.length-1]
      : "",
    sumDownloads,
    labels,
    data,
    onCloseItem: bindTo(onCloseItem, chartType, browserType, key),
  });
};

export default fCrateDownload
