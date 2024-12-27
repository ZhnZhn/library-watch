import {
  isFn,
  useCallback
} from '../../uiApi';

import useToggle from '../../hooks/useToggle';
import useItemMenuMore from '../useItemMenuMore';

import { fLineConfig } from '../../charts/ChartConfigFactories';

import ShowHide from '../../zhn/ShowHide';
import LineChart from '../../charts/LineChart';
import ButtonPackage from './ButtonPackage';
import ButtonWatch from './ButtonWatch';
import Caption from '../ItemCaption';
import NpmPackageInfo from './NpmPackageInfo';

import {
  S_ROOT,
  CHART_OPTIONS_LEGEND_TOP
} from '../Item.Style';

const ITEM_DESCRIPTION = "Npm Recent Month Downloads"
, S_CAPTION = { paddingLeft: 4 }
, S_CHART_WRAPPER = { paddingTop: 4 };

const NpmDownloads = ({
  type,
  options,
  chartType,
  caption,
  packageName,
  requestType,
  sumDownloads=0,
  toDate,
  fromDate,
  chartConfig,
  labels,
  data,
  packageLink,
  onWatchItem,
  onMoveToTop,
  onCloseItem
}) => {
  const [
    isShow,
    toggleIsShow
  ] = useToggle(true)
  , [
    isButtons,
    toggleIsButtons
  ] = useToggle(true)
  , [
    MenuMoreEl,
    BtMenuMoreEl
  ] = useItemMenuMore(
      onMoveToTop,
      toggleIsButtons
  )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickWatch = useCallback(() => {
    const _caption = `${packageName} ${sumDownloads}`;
    onWatchItem({
       caption: _caption,
       config: {
          requestType,
          repo: packageName,
          descr: ITEM_DESCRIPTION,
          version: sumDownloads,
          caption: _caption,
          date: toDate
        }
    });
  }, [])
  // requestType, packageName, sumDownloads, toDate, onWatchItem
  /*eslint-enable react-hooks/exhaustive-deps */
  , _lineChartConfig = chartConfig || fLineConfig({ labels, data });

  return (
    <div style={S_ROOT}>
      {MenuMoreEl}
      <Caption
         style={S_CAPTION}
         onClose={onCloseItem}
      >
        {BtMenuMoreEl}
        <ButtonPackage
           caption={caption}
           packageName={packageName}
           sumDownloads={sumDownloads}
           fromDate={fromDate}
           toDate={toDate}
           onClick={toggleIsShow}
        />
        { isFn(onWatchItem) && <ButtonWatch
            onClick={_hClickWatch}
        />}
      </Caption>
      <ShowHide
         isShow={isShow}
         style={S_CHART_WRAPPER}
      >
        <LineChart
           type={type}
           data={_lineChartConfig}
           options={options || CHART_OPTIONS_LEGEND_TOP}
        />
        <NpmPackageInfo
          isButtons={isButtons}
          packageName={packageName}
          packageLink={packageLink}
        />
      </ShowHide>
    </div>
  );
};

export default NpmDownloads
