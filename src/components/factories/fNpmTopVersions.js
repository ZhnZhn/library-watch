import NpmDownloads from '../items/npm/NpmDownloads';

const _transformDownloads = (downloads) => {
  let labels = [], data = [];
  Object.keys(downloads)
    .map(key => [key, downloads[key]])
    .sort((tA, tB) => tB[1] - tA[1])
    .slice(0, 10)
    .forEach(tuple => {
      labels.push(tuple[0])
      data.push(tuple[1])
    });

  return {
    data,
    labels,
    sumDownloads: data
      .reduce((sum, versionDownloads) => sum + versionDownloads, 0)
  }
};

const fNpmTopVersions = ({
  createElement,
  option,
  json,
  parentProps,
  onMoveToTop,
  onCloseItem
}) => {
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

  return createElement(NpmDownloads, {
     key,
     type: 'bar',
     options: {
       indexAxis: 'y'
     },
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
     ...parentProps
  })
}

export default fNpmTopVersions
