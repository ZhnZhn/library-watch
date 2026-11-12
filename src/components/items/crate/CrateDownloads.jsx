import useToggle from '../../hooks/useToggle';
import useItemMenuMore from '../useItemMenuMore';

import { fLineConfigs } from '../../charts/ChartConfigFactories';
import { ChartComponent} from '../../charts/ChartComponent';

import Caption from '../ItemCaption';

import ButtonPackage from '../npm/ButtonPackage';
import ShowHide from '../../zhn/ShowHide';

import { 
  CHART_OPTIONS_LEGEND_TOP,
  Item,
  ItemSourceLink
} from '../Item.Style';

const S_CAPTION = {
  paddingLeft: 4
}
, S_CHART_WRAPPER = {
  paddingTop: 4
}
, S_DESCR = {
  padding: '6px 0 0 16px',
  lineHeight: 1.25,
  fontWeight: 600
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
  docLink,
  descr,
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
      </Caption>
      <ShowHide
        isShow={isShow}
        style={S_CHART_WRAPPER}
      >
        <ChartComponent
           type={type}
           data={_lineChartConfig}
           options={options || CHART_OPTIONS_LEGEND_TOP}
        />
        <ItemSourceLink                   
          href={sourceLink}
        >
            {`Crates.io ${packageName}`}
        </ItemSourceLink>
        <ItemSourceLink                   
          href={docLink}
        >
            Documentation
        </ItemSourceLink>
        <p style={S_DESCR}>
           {descr}
        </p>
      </ShowHide>
    </Item>
  );
};

export default CrateDownloads
