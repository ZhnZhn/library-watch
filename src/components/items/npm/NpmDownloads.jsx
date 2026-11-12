import { isFn } from '../../../utils/isTypeFn';
import { useCallback } from '../../uiApi';

import useToggle from '../../hooks/useToggle';
import { useItemMenuMoreToTop } from '../useItemMenuMore';

import { fLineConfig } from '../../charts/ChartConfigFactories';

import ShowHide from '../../zhn/ShowHide';
import { ChartComponent } from '../../charts/ChartComponent';
import ButtonPackage from './ButtonPackage';
import Caption from '../ItemCaption';
import NpmPackageInfo from './NpmPackageInfo';

import { 
  CHART_OPTIONS_LEGEND_TOP,
  Item,
  ButtonAddToWatch
} from '../Item.Style';

const ITEM_DESCRIPTION = "Npm Recent Month Downloads"
, S_CAPTION = { 
  paddingLeft: 4 
}
, S_CHART_WRAPPER = { 
  paddingTop: 4 
}
, S_BTN_ADD_TO_WATCH = {
  position: 'relative',
  top: -2,
  marginLeft: 10
};;

const NpmDownloads = ({
  type,
  options,
  caption,
  packageName,
  requestType,
  sumDownloads=0,
  toDate,
  fromDate,
  chartConfig,
  labels,
  data,
  height,
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
  ] = useItemMenuMoreToTop(
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
    <Item>
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
        { isFn(onWatchItem) && <ButtonAddToWatch
            style={S_BTN_ADD_TO_WATCH}
            onClick={_hClickWatch}
        />}
      </Caption>
      <ShowHide
         isShow={isShow}
         style={S_CHART_WRAPPER}
      >
        <ChartComponent
           type={type}
           height={height}
           data={_lineChartConfig}
           options={options || CHART_OPTIONS_LEGEND_TOP}
        />
        <NpmPackageInfo
          isButtons={isButtons}
          packageName={packageName}
          packageLink={packageLink}
        />
      </ShowHide>
    </Item>
  );
};

export default NpmDownloads
