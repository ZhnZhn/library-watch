import { useCallback } from '../../uiApi';
import useToggle from '../../hooks/useToggle';
import useMenuMore from '../../hooks/useMenuMore';

import { fLineConfig } from '../../charts/ChartConfigFactories';

import crModelMore from '../crNpmModelMore';

import SvgMore from '../../zhn/SvgMore';
import ShowHide from '../../zhn/ShowHide';
import ModalSlider from '../../zhn-modal-slider/ModalSlider';
import LineChart from '../../charts/LineChart';
import ButtonPackage from './ButtonPackage';
import ButtonWatch from './ButtonWatch';
import Caption from '../ItemCaption';
import NpmPackageInfo from './NpmPackageInfo';

import { CL_MENU_MORE } from '../../styles/CL';
import {
  S_ROOT,
  S_BT_MORE
} from '../Item.Style';

const ITEM_DESCRIPTION = "Npm Recent Month Downloads"
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
    isButtons,
    toggleIsButtons
  ] = useToggle(true)
  , [
    _MENU_MODEL,
    isMenuMore,
    toggleIsMenuMore,
    setIsMenuMore
  ] = useMenuMore(crModelMore, {
    onMoveToTop,
    onToggleButtons: toggleIsButtons
  })
  /*eslint-disable react-hooks/exhaustive-deps */
  , _showMenuMore = useCallback(() => {
    setIsMenuMore(true)
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
  , _lineChartConfig = fLineConfig({ labels, data });

  return (
    <div style={S_ROOT}>
      <ModalSlider
         isShow={isMenuMore}
         className={CL_MENU_MORE}
         model={_MENU_MODEL}
         onClose={toggleIsMenuMore}
      />
      <Caption
         style={S_CAPTION}
         onClose={onCloseItem}
      >
        <SvgMore
          style={S_BT_MORE}
          onClick={_showMenuMore}
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
      <ShowHide
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
      </ShowHide>
    </div>
  );
};

export default NpmDownloads
