import useToggle from '../../hooks/useToggle';

import { fLineConfig } from '../../charts/ChartConfigFactories';
import LineChart from '../../charts/LineChart';

import Caption from '../ItemCaption';
import ButtonPackage from '../npm/ButtonPackage';
import ShowHide from '../../zhn/ShowHide';

import { S_ROOT } from '../Item.Style';

const S_CAPTION = {
  paddingLeft: 4
}
, S_BT_PACKAGE = {
  top: 4
}
, S_CHART_WRAPPER = {
  paddingTop: 4
}
, CHART_OPTIONS = {
  legend: {
    position: "top"
  }
};

const CrateDownloads = ({
  type,
  options,
  caption,
  packageName,
  sumDownloads,
  fromDate,
  toDate,
  labels,
  data,
  onCloseItem
}) => {
  const [
    isShow,
    toggleIsShow
  ] = useToggle(true)
  , _lineChartConfig = fLineConfig({
    labels,
    data
  });

  return (
    <div style={S_ROOT}>
      <Caption
        style={S_CAPTION}
        onClose={onCloseItem}
      >
        <ButtonPackage
           style={S_BT_PACKAGE}
           caption={caption}
           packageName={packageName}
           sumDownloads={sumDownloads}
           fromDate={fromDate}
           toDate={toDate}
           onClick={toggleIsShow}
        />
      </Caption>
      <ShowHide
        isShow={isShow}
        style={S_CHART_WRAPPER}
      >
        <LineChart
           type={type}
           data={_lineChartConfig}
           options={options || CHART_OPTIONS}
        />
      </ShowHide>
    </div>
  );
};

export default CrateDownloads
