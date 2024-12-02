import { CL_SOURCE_LINK } from '../../styleFn';

import useToggle from '../../hooks/useToggle';
import useItemMenuMore from '../useItemMenuMore';

import { fLineConfigs } from '../../charts/ChartConfigFactories';
import LineChart from '../../charts/LineChart';

import Caption from '../ItemCaption';
import ButtonPackage from '../npm/ButtonPackage';
import ShowHide from '../../zhn/ShowHide';
import Link from '../../zhn/Link';

import {
  S_ROOT,
  CHART_OPTIONS_LEGEND_TOP,
  S_SOURCE_LINK
} from '../Item.Style';

const S_CAPTION = {
  paddingLeft: 4
}
, S_CHART_WRAPPER = {
  paddingTop: 4
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
  sourceLink,
  onMoveToTop,
  onCloseItem
}) => {
  const [
    isShow,
    toggleIsShow
  ] = useToggle(true)
  , [
    MenuMoreEl,
    BtMenuMoreEl
  ] = useItemMenuMore(onMoveToTop)
  , _lineChartConfig = fLineConfigs({
    labels,
    data
  });

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
        <Link
          className={CL_SOURCE_LINK}
          style={S_SOURCE_LINK}
          href={sourceLink}
        >
            {`Crates.io ${packageName}`}
        </Link>
      </ShowHide>
    </div>
  );
};

export default CrateDownloads
