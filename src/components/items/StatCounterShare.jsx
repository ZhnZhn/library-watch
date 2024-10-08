import {
  CL_BT_ITEM,
  CL_MENU_MORE,
  CL_SOURCE_LINK
} from '../styleFn';

import useToggle from '../hooks/useToggle';
import useMenuMore from '../hooks/useMenuMore';

import { fLineConfigs } from '../charts/ChartConfigFactories'
import crModelMore from './crNpmModelMore';

import ShowHide from '../zhn/ShowHide';
import Link from '../zhn/Link';
import SvgMore from '../zhn/SvgMore';
import ModalSlider from '../zhn-modal-slider/ModalSlider';
import LineChart from '../charts/LineChart';
import Caption from './ItemCaption';

import {
  S_ROOT,
  S_CAPTION_OPEN,
  S_BT_MORE
} from './Item.Style';

const S_BT_CAPTION = {
  ...S_CAPTION_OPEN,
  position: 'relative',
  top: -3
}
, S_CAPTION = { paddingLeft: 4 }
, S_SPAN_START = { padding: "0 10px" }
, S_CHART_WRAPER = { paddingTop: 12 }
, S_SOURCE_LINK = { margin: "4px 0 0 16px" };

const _crChartConfig = (
  labels,
  data
) => {
  const _lineChartConfig = fLineConfigs({ labels, data })
  , _numSeries = _lineChartConfig.datasets.length
  , _height = 150 + Math.floor(_numSeries / 5) * 16;
  return [_lineChartConfig, _height];
};

const StatcounterShare = ({
  caption,
  fromDate,
  toDate,
  labels,
  data,
  sourceLink,
  onMoveToTop,
  onCloseItem
}) => {
  const [
     _isShow,
     _toggleIsShow
  ] = useToggle(true)
  , [
      _MODAL_SLIDER_MODEL,
      _isMenuMore,
      _toggleMenuMore,
      _showMenuMore
  ] = useMenuMore(crModelMore, { onMoveToTop })
  , [
      _lineChartConfig,
      _height
  ] = _crChartConfig(labels, data);

  return (
    <div style={S_ROOT}>
      <ModalSlider
        isShow={_isMenuMore}
        className={CL_MENU_MORE}
        model={_MODAL_SLIDER_MODEL}
        onClose={_toggleMenuMore}
      />
      <Caption
        style={S_CAPTION}
        onClose={onCloseItem}
      >
        <SvgMore
          style={S_BT_MORE}
          onClick={_showMenuMore}
        />
        <button
           className={CL_BT_ITEM}
           title={caption}
           style={S_BT_CAPTION}
           onClick={_toggleIsShow}
        >
          <span>
            {caption}
          </span>
          <span style={S_SPAN_START}>
            {fromDate}
          </span>
          <span>
            {toDate}
          </span>
        </button>
      </Caption>
      <ShowHide
        isShow={_isShow}
        style={S_CHART_WRAPER}
      >
        <LineChart
           data={_lineChartConfig}
           height={_height}
        />
        <Link
          className={CL_SOURCE_LINK}
          style={S_SOURCE_LINK}
          href={sourceLink}
        >
            Statcounter Chart
        </Link>
      </ShowHide>
    </div>
  );
};

export default StatcounterShare
