import { useCallback } from '../../uiApi';
import useToggle from '../../hooks/useToggle';
import useRefInit from '../../hooks/useRefInit';

import { fLineConfig } from '../../charts/ChartConfigFactories';

import crModelMore from '../crNpmModelMore';

import A from '../../zhn-atoms/A';
import ModalSlider from '../../zhn-modal-slider/ModalSlider';
import LineChart from '../../charts/LineChart';
import ButtonPackage from './ButtonPackage';
import ButtonWatch from './ButtonWatch';
import Caption from '../ItemCaption';
import NpmPackageInfo from './NpmPackageInfo';

import CL from '../../styles/CL';
import STYLE from '../Item.Style';

const ITEM_DESCRIPTION = "Npm Recent Month Downloads"

, S_ROOT = STYLE.ROOT
, S_BT_MORE = STYLE.BT_MORE
, S_CAPTION = { paddingLeft: 4 }
, S_CHART_WRAPPER = { paddingTop: 4 }

, CHART_OPTIONS = {
  legend: {
    position: 'top'
  }
};

const _isFn = fn => typeof fn === 'function';

const NpmDownloads = ({
  caption,
  packageName,
  requestType,
  sumDownloads=0,
  toDate,
  fromDate,
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
    isMore,
    toggleIsMore
  ] = useToggle()
  , [
    isButtons,
    toggleIsButtons
  ] = useToggle(true)
  , _MODEL_MORE = useRefInit(() => crModelMore({
    onMoveToTop,
    onToggleButtons: toggleIsButtons
  }))[0]
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickMore = useCallback(() => {
    toggleIsMore(true)
  }, [])
  // toggleIsMore
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
  , _lineChartConfig = fLineConfig({ labels, data })

  return (
    <div style={S_ROOT}>
      <ModalSlider
         isShow={isMore}
         className={CL.MENU_MORE}
         model={_MODEL_MORE}
         onClose={toggleIsMore}
      />
      <Caption
         style={S_CAPTION}
         onClose={onCloseItem}
      >
        <A.SvgMore
          style={S_BT_MORE}
          onClick={_hClickMore}
        />
        <ButtonPackage
           caption={caption}
           packageName={packageName}
           sumDownloads={sumDownloads}
           fromDate={fromDate}
           toDate={toDate}
           onClick={toggleIsShow}
        />
        { _isFn(onWatchItem) && <ButtonWatch
            onClick={_hClickWatch}
        />}
      </Caption>
      <A.ShowHide
         isShow={isShow}
         style={S_CHART_WRAPPER}
      >
        <LineChart
           data={_lineChartConfig}
           options={CHART_OPTIONS}
        />
        <NpmPackageInfo
          isButtons={isButtons}
          packageName={packageName}
          packageLink={packageLink}
        />
      </A.ShowHide>
    </div>
  );
};

export default NpmDownloads
