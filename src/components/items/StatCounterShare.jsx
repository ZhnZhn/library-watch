import React, { Component } from 'react'

import Chart from '../charts/Chart'

import crModelMore from './crNpmModelMore'

import A from '../zhn-atoms/A'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import LineChart from '../charts/LineChart'
import Caption from './ItemCaption'


import CL from '../styles/CL'

const S = {
  ROOT: {
    position: 'relative',
    lineHeight: 1.5,
    marginBottom: 10,
    marginRight: 25
  },
  CAPTION_OPEN: {
    position: 'relative',
    top: -6,
    display: 'inline-block',
    color: '#a487d4',
    paddingLeft: 8,
    maxWidth: 500,
    fontWeight : 'bold',
    whiteSpace: 'nowrap',
    textOverflow : 'ellipsis',
    overflow : 'hidden',
    cursor: 'pointer'
  },
  CAPTION: {
    paddingLeft: 4,
  },
  BT_MORE: {
    verticalAlign: 'none'
  },

  SPAN_SUM: {
    color: '#80c040',
    paddingLeft: 10,
    paddingRight: 10
  },
  SPAN_START: {
    paddingRight: 10
  },
  BTN_CIRCLE: {
    position: 'relative',
    top: -6,
    marginLeft: 10
  },

  ML_32: {
    marginLeft: 32
  },
  MT_16: {
    marginTop: 16
  },
  MB_16: {
    marginBottom: 16
  },

  BUTTON_DOWN_UP: {
    paddingTop: 4,
    paddingBottom: 4
  },
  LINK: {
    marginLeft: 32
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
             className={CL.NOT_SELECTED}
             title={caption}
             style={S.CAPTION_OPEN}
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
        <A.ShowHide isShow={isShow}>
          <LineChart
             data={_lineChartConfig}
          />
          <a className={CL.SOURCE_LINK} style={S.LINK} href={sourceLink} target="_blank">
              StatCounter Chart
          </a>
        </A.ShowHide>
      </div>
    );
  }
}

export default NpmRecentDownloads
