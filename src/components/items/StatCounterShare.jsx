import {
  CL_BT_ITEM,
  CL_SOURCE_LINK
} from '../styleFn';

import useToggle from '../hooks/useToggle';
import useItemMenuMore from './useItemMenuMore';

import { fLineConfigs } from '../charts/ChartConfigFactories'

import ShowHide from '../zhn/ShowHide';
import Link from '../zhn/Link';
import { ChartComponent } from '../charts/ChartComponent';
import Caption from './ItemCaption';

import {
  S_ROOT,
  S_CAPTION_OPEN,
  S_SOURCE_LINK
} from './Item.Style';

const S_BT_CAPTION = {
  ...S_CAPTION_OPEN,
  position: 'relative',
  top: -3
}
, S_CAPTION = { paddingLeft: 4 }
, S_SPAN_START = { padding: "0 10px" }
, S_CHART_WRAPER = { paddingTop: 12 };

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
    MenuMoreEl,
    BtMenuMoreEl
  ] = useItemMenuMore(onMoveToTop)
  , [
      _lineChartConfig,
      _height
  ] = _crChartConfig(labels, data);

  return (
    <div style={S_ROOT}>
      {MenuMoreEl}
      <Caption
        style={S_CAPTION}
        onClose={onCloseItem}
      >
        {BtMenuMoreEl}
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
        <ChartComponent
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
