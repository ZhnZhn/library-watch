import { Component } from 'react'

import Chart from '../charts/Chart'

import crModelMore from './crNpmModelMore'

import A from '../zhn-atoms/A'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import LineChart from '../charts/LineChart'
import Caption from './ItemCaption'

import STYLE from './Item.Style'
import CL from '../styles/CL'

const S = {
  ROOT: STYLE.ROOT,
  BT_MORE: STYLE.BT_MORE,
  BT_CAPTION: {
    ...STYLE.CAPTION_OPEN,
    position: 'relative',
    top: -3
  },
  CAPTION: {
    paddingLeft: 4,
  },

  SPAN_SUM: {
    color: '#80c040',
    paddingLeft: 10,
    paddingRight: 10
  },
  SPAN_START: {
    paddingLeft: 10,
    paddingRight: 10
  },
  BTN_CIRCLE: {
    position: 'relative',
    top: -6,
    marginLeft: 10
  },


  CHART_WRAPER: {
    paddingTop: 12
  },

  BUTTON_DOWN_UP: {
    paddingTop: 4,
    paddingBottom: 4
  },
  SOURCE_LINK: {
    marginTop: 4,
    marginLeft: 16
  }
};

class NpmRecentDownloads extends Component {

  constructor(props){
    super(props)
    const { onMoveToTop } = props;
    this._MORE = crModelMore({
      onMoveToTop
    })
    this.state = {
      isShow: true,
      isMore: false
    }
  }

  _hClickMore = () => {
    this.setState({ isMore: true })
  }
  _hToggleMore = () => {
    this.setState(prevState => ({
      isMore: !prevState.isMore
    }))
  }

  _handlerToggleOpen = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }


  render(){
    const {
      caption,
      fromDate, toDate,
      labels, data,
      sourceLink,
      onCloseItem
    } = this.props
    , {
      isShow, isMore,
    } = this.state
    , _lineChartConfig = Chart.fLineConfigs({ labels, data })
    , _numSeries = _lineChartConfig.datasets.length
    , _heigh = 150 + Math.floor(_numSeries / 5) * 16

    return (
      <div style={S.ROOT}>
        <ModalSlider
          isShow={isMore}
          className={CL.MENU_MORE}
          model={this._MORE}
          onClose={this._hToggleMore}
        />
        <Caption style={S.CAPTION} onClose={onCloseItem}>
          <A.SvgMore
            style={S.BT_MORE}
            onClick={this._hClickMore}
          />
          <button
             className={CL.BT_ITEM}
             title={caption}
             style={S.BT_CAPTION}
             onClick={this._handlerToggleOpen}
          >
            <span>
              {caption}
            </span>
            <span style={S.SPAN_START}>
              {fromDate}
            </span>
            <span>
              {toDate}
            </span>
          </button>
        </Caption>
        <A.ShowHide isShow={isShow} style={S.CHART_WRAPER}>
          <LineChart
             data={_lineChartConfig}
             height={_heigh}
          />
          <a className={CL.SOURCE_LINK} style={S.SOURCE_LINK} href={sourceLink} target="_blank">
              StatCounter Chart
          </a>
        </A.ShowHide>
      </div>
    );
  }
}

export default NpmRecentDownloads
