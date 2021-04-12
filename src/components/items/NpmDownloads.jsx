import { Component } from 'react'

import Chart from '../charts/Chart'

import crModelMore from './crNpmModelMore'

import loadNpms from './loadNpms'
import loadBundle from './loadBundle'

import A from '../zhn-atoms/A'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import LineChart from '../charts/LineChart'
import Caption from './ItemCaption'
import PackageDetails from './PackageDetails'
import BundleInfo from './BundleInfo'

import CL from '../styles/CL'
import STYLE from './Item.Style'

const BASE_NODEICO = "https://nodei.co/npm/"
    , SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true"
    , ITEM_DESCRIPTION = "Npm Recent Month Downloads";

const S = {
  ROOT: STYLE.ROOT,
  CAPTION_OPEN: {
    ...STYLE.CAPTION_OPEN,
    position: 'relative',
    top: -3
  },
  BT_MORE: STYLE.BT_MORE,
  CAPTION: {
    paddingLeft: 4,
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
  ML_16: {
    marginLeft: 16
  },
  MT_16: {
    marginTop: 16
  },
  MB_16: {
    marginBottom: 16
  },

  CHART_WRAPER: {
    paddingTop: 4
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
  }

};

const CHART_OPTIONS = {
  legend: {
    position: 'top'
  }
};


const _isFn = fn => typeof fn === 'function';

class NpmDownloads extends Component {

  constructor(props){
    super(props)
    const { onMoveToTop } = props;
    this._MORE = crModelMore({
      onMoveToTop,
      onToggleButtons: this._toggleButtons
    })
    this.state = {
      isShow: true,
      isMore: false,
      isButtons: true,
      isLoadNodeIco: false,
      isShowNodeIco: false,
      isLoadedNpms: false,
      isShowNmps: false,
      isShowBundle: false
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
  _toggleButtons = () => {
    this.setState(prevState => ({
      isButtons: !prevState.isButtons
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

  _hClickBundle = () => {
    const { bundleJson } = this.state;    
    if (bundleJson) {
      this.setState(prevState => ({
        isShowBundle: !prevState.isShowBundle
      }))
    } else {
      const { packageName } = this.props;
      loadBundle({ packageName, onLoad: this._onLoadBundle })
    }
  }
  _onLoadBundle = (json) => {
    this.setState({
      bundleJson: json,
      isShowBundle: true
    })
  }

  _renderButtonWatch = () => {
    return (
      <A.ButtonCircle
         caption="W"
         title="Add to WatchList"
         style={S.BTN_CIRCLE}
         onClick={this._handlerClickWatch}
      />
    )
  }

  render(){
    const {
      packageName, caption, sumDownloads=0,
      fromDate, toDate,
      labels, data,
      packageLink,
      onCloseItem, onWatchItem
    } = this.props
    , {
      isShow, isMore,
      isButtons,
      isLoadNodeIco, isShowNodeIco,
      isLoadedNpms, isShowNmps, npmsJson,
      isShowBundle, bundleJson
    } = this.state
    , _lineChartConfig = Chart.fLineConfig({ labels, data })
    , _onClickNpms = isLoadedNpms
        ? this._toggleNpms
        : this._hClickNpms
    , _infoStyle = isButtons
          ? { ...S.ML_16, ...S.MT_16 }
          : S.ML_16;
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
        <A.ShowHide isShow={isShow} style={S.CHART_WRAPER}>
          <LineChart
             data={_lineChartConfig}
             options={CHART_OPTIONS}
          />
          <A.ShowHide isShow={isButtons}>
           <div style={S.ML_16}>
             <a
                target="_blank"
                className={CL.SOURCE_LINK}
                href={packageLink}
             >
                NPM Link
            </a>
             <A.ButtonDownUp
               style={{...S.BUTTON_DOWN_UP, ...S.ML_16}}
               isUp={isShowNodeIco}
               caption="NodeICO"
               title="Package badge from Nodei.co"
               onClick={this._handlerClickNodeIco}
             />
             <A.ButtonDownUp
               style={{ ...S.BUTTON_DOWN_UP, ...S.ML_16 }}
               isUp={isShowNmps}
               caption="NPMS.IO"
               title="Click to load package info from npms.io"
               onClick={_onClickNpms}
             />
             <A.ButtonDownUp
               style={{ ...S.BUTTON_DOWN_UP, ...S.ML_16 }}
               isUp={isShowBundle}
               caption="Bundlephobia.com"
               title="Click to load package info from bundlephobia.com"
               onClick={this._hClickBundle}
             />
           </div>
          </A.ShowHide>

          <div style={_infoStyle}>
            <A.ShowHide isShow={isShowNodeIco} style={S.MB_16}>
              {
                isLoadNodeIco && <A.LinkImg
                  href={packageLink}
                  imgClass="node-ico"
                  imgSrc={`${BASE_NODEICO}${packageName}${SUFFIX_NODEICO}`}
                />
              }
            </A.ShowHide>
            <A.ShowHide isShow={isShowNmps} style={S.MB_16}>
              {isLoadedNpms && <PackageDetails json={npmsJson} />}
            </A.ShowHide>
            <A.ShowHide isShow={isShowBundle} style={S.MB_16}>
               <BundleInfo json={bundleJson} />
            </A.ShowHide>
          </div>

        </A.ShowHide>
      </div>
    );
  }
}

export default NpmDownloads
