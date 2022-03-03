import { useCallback } from '../uiApi';
import useRefInit from '../hooks/useRefInit';
import useToggle from '../hooks/useToggle';

import Chart from '../charts/Chart';
import crModelMore from './crNpmModelMore';

import A from '../zhn-atoms/A';
import ModalSlider from '../zhn-modal-slider/ModalSlider';
import LineChart from '../charts/LineChart';
import Caption from './ItemCaption';

import STYLE from './Item.Style';
import CL from '../styles/CL';

const S_BT_CAPTION = {
  ...STYLE.CAPTION_OPEN,
  position: 'relative',
  top: -3
}
, S_CAPTION = { paddingLeft: 4 }
, S_SPAN_START = { padding: "0 10px" }
, S_CHART_WRAPER = { paddingTop: 12 }
, S_SOURCE_LINK = { margin: "4px 0 0 16px" };

const _crChartConfig = (labels, data) => {
  const _lineChartConfig = Chart.fLineConfigs({ labels, data })
  , _numSeries = _lineChartConfig.datasets.length
  , _height = 150 + Math.floor(_numSeries / 5) * 16;
  return [_lineChartConfig, _height];
};

const StatCounterShare = ({
  caption,
  fromDate,
  toDate,
  labels,
  data,
  sourceLink,
  onMoveToTop,
  onCloseItem
}) => {
  const _MODAL_SLIDER_MODEL = useRefInit(() =>
    crModelMore({ onMoveToTop})
  )
  , [_isShow, _toggleIsShow] = useToggle(true)
  , [_isMore, _toggleIsMore] = useToggle(false)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClickMore = useCallback(() => {
      _toggleIsMore(true)
  }, [])
  // _toggleIsMore
  /*eslint-enable react-hooks/exhaustive-deps */
  , [
      _lineChartConfig,
      _height
  ] = _crChartConfig(labels, data);

  return (
    <div style={STYLE.ROOT}>
      <ModalSlider
        isShow={_isMore}
        className={CL.MENU_MORE}
        model={_MODAL_SLIDER_MODEL}
        onClose={_toggleIsMore}
      />
      <Caption
        style={S_CAPTION}
        onClose={onCloseItem}
      >
        <A.SvgMore
          style={STYLE.BT_MORE}
          onClick={_hClickMore}
        />
        <button
           className={CL.BT_ITEM}
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
      <A.ShowHide
        isShow={_isShow}
        style={S_CHART_WRAPER}
      >
        <LineChart
           data={_lineChartConfig}
           height={_height}
        />
        <a
          className={CL.SOURCE_LINK}
          style={S_SOURCE_LINK}
          href={sourceLink}
          target="_blank"
        >
            StatCounter Chart
        </a>
      </A.ShowHide>
    </div>
  );
};

export default StatCounterShare
