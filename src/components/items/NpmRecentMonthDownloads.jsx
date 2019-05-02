import React, { Component } from 'react'

import Chart from '../charts/Chart'

import crModelMore from './crNpmModelMore'

import loadNpms from './loadNpms'

import A from '../zhn-atoms/A'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import LineChart from '../charts/LineChart'
import Caption from './ItemCaption'
import PackageDetails from './PackageDetails'

import CL from '../styles/CL'

const BASE_NODEICO = "https://nodei.co/npm/"
    , SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true"
    , BASE_NPM = "https://www.npmjs.com/package/"
    , ITEM_DESCRIPTION = "Npm Recent Month Downloads";

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

  ROW_BTS: {
    marginLeft: 32
  },
  DIV_NODEICO_BADGE: {
     marginLeft: 32
  },
  SPAN_NODEICO: {
    display: 'block',
    fontWeight: 'bold' ,
    color: '#3399FF',
    cursor: 'pointer'
  },

  BUTTON_DOWN_UP: {
    paddingTop: 4,
    paddingBottom: 4
  },

  SHOW_HIDE_BADGE: {
    marginTop: 16
  }
};


const _isFn = fn => typeof fn === 'function';

class NpmRecentDownloads extends Component {

  constructor(props){
    super(props)
    const { onMoveToTop } = props;
    this._MORE = crModelMore({
      onMoveToTop
    })
    this.state = {
      isShow: true,
      isMore: false,
      isLoadNodeIco: false,
      isShowNodeIco: false,
      isLoadedNpms: false,
      isShowNmps: false
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
    this.setState({ isShow : !this.state.isShow });
  }
  _handlerClickWatch = () => {
    const { packageName, requestType, sumDownloads, toDate, onWatchItem } = this.props
        , _caption = `${packageName} ${sumDownloads}`
        , _descr = ITEM_DESCRIPTION
    onWatchItem({
       caption : _caption,
       config : {
          requestType,
          repo : packageName,
          descr: _descr,
          version : sumDownloads,
          caption : _caption,
          date : toDate
        }
    });
  }

  _handlerClickNodeIco = () => {
    this.setState({
      isLoadNodeIco : true,
      isShowNodeIco : !this.state.isShowNodeIco
    });
  }

  _hClickNpms = () => {
    const { packageName } = this.props;
    loadNpms({ packageName, onLoad: this._onLoadNpms })
  }

  _onLoadNpms = (json) => {
    this.setState({
      npmsJson: json,
      isLoadedNpms: true,
      isShowNmps: true
    })
  }

  _toggleNpms = () => {
    this.setState(prevState => ({
      isShowNmps: !prevState.isShowNmps
    }))
  }

  _renderButtonWatch = () => {
    return (
      <A.ButtonCircle
         caption="W"
         title="Add to Watch"
         style={S.BTN_CIRCLE}
         onClick={this._handlerClickWatch}
      />
    )
  }

  _renderNodeIcoBadge = (packageName) => {
    const _href = BASE_NPM + packageName
        , _imgSrc = BASE_NODEICO + packageName + SUFFIX_NODEICO
    return (
      <A.LinkImg
         href={_href}
         imgClass="node-ico"
         imgSrc={_imgSrc}
      />
    );
  }

  render(){
    const {
      packageName, caption, sumDownloads=0,
      fromDate, toDate,
      labels, data,
      onCloseItem, onWatchItem
    } = this.props
    , {
      isShow, isMore,
      isLoadNodeIco, isShowNodeIco,
      isLoadedNpms, isShowNmps, npmsJson
    } = this.state
    , _lineChartConfig = Chart.fLineConfig({ labels, data })
    , _onClickNpms = isLoadedNpms
        ? this._toggleNpms
        : this._hClickNpms;
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
             className="not-selected"
             title={caption}
             style={S.CAPTION_OPEN}
             onClick={this._handlerToggleOpen}
          >
            <span>
              {packageName}
            </span>
            <A.FormattedInteger
               value={sumDownloads}
               style={S.SPAN_SUM}
            />
            <span style={S.SPAN_START}>
              {fromDate}
            </span>
            <span>
              {toDate}
            </span>
          </button>
          { _isFn(onWatchItem) && this._renderButtonWatch() }
        </Caption>
        <A.ShowHide isShow={isShow}>
          <LineChart
             data={_lineChartConfig}
          />

         <div style={S.ROW_BTS}>
           <A.ButtonDownUp
             style={S.BUTTON_DOWN_UP}
             isUp={isShowNodeIco}
             caption="NodeICO"
             title="Package badge from Nodei.co"
             onClick={this._handlerClickNodeIco}
           />
           <A.ButtonDownUp
             style={{ ...S.BUTTON_DOWN_UP, marginLeft: 32 }}
             isUp={isShowNmps}
             caption="NPMS.IO"
             title="Click to load package info from npms.io"
             onClick={_onClickNpms}
           />
         </div>

          <div style={S.DIV_NODEICO_BADGE}>
            <A.ShowHide isShow={isShowNodeIco} style={S.SHOW_HIDE_BADGE}>
              {isLoadNodeIco && this._renderNodeIcoBadge(packageName)}
            </A.ShowHide>
            <A.ShowHide isShow={isShowNmps} style={S.SHOW_HIDE_BADGE}>
              {isLoadedNpms && <PackageDetails json={npmsJson} />}
            </A.ShowHide>
          </div>

        </A.ShowHide>
      </div>
    );
  }
}

export default NpmRecentDownloads
