import { bindTo } from '../uiApi';
import NpmDownloads from '../items/npm/NpmDownloads';

const FN_NOOP = () => ({})
, fNpm = (
  transformDownloads,
  crElementProps=FN_NOOP
) => (
  options
) => {
  const {
    createElement,
    option,
    json,
    parentProps,
    onMoveToTop,
    onCloseItem
  } = options
  , {
    requestType,
    chartType,
    browserType,
    key,
    packageLink
  } = option
  , {
    downloads,
    package: packageName
  } = json
  , {
    sumDownloads,
    fromDate,
    toDate,
    labels,
    data
  } = transformDownloads(downloads);
  return createElement(NpmDownloads, {
     key,
     packageName,
     caption: packageName,
     packageLink,
     requestType,
     sumDownloads,
     fromDate,
     toDate,
     labels,
     data,
     onMoveToTop,
     onCloseItem: bindTo(onCloseItem, chartType, browserType, key),
     ...crElementProps(options),
     ...parentProps
  })
};

export default fNpm
