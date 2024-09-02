import fNpm from './fNpm';

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

const fNpmRecentDownloads = fNpm(_transformDownloads);

export default fNpmRecentDownloads
