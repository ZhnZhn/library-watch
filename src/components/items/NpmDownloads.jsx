import { Component } from 'react'

import { fLineConfig } from '../charts/ChartConfigFactories'

import crModelMore from './crNpmModelMore'

import loadNpms from './loadNpms'
import loadBundle from './loadBundle'

import A from '../zhn-atoms/A'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import LineChart from '../charts/LineChart'
import ButtonPackage from './ButtonPackage';
import Caption from './ItemCaption'
import PackageDetails from './PackageDetails'
import BundleInfo from './BundleInfo'

import CL from '../styles/CL'
import STYLE from './Item.Style'

const BASE_NODEICO = "https://nodei.co/npm/"
, SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true"
, ITEM_DESCRIPTION = "Npm Recent Month Downloads"

, S_ROOT = STYLE.ROOT
, S_BT_MORE = STYLE.BT_MORE
, S_CAPTION = { paddingLeft: 4 }
, S_BTN_CIRCLE = {
  position: 'relative',
  top: -6,
  marginLeft: 10
}
, S_ML_8 = { marginLeft: 8 }
, S_ML_16 = { marginLeft: 16 }
, S_MT_16 = { marginTop: 16 }
, S_MB_16 = { marginBottom: 16 }
, S_CHART_WRAPPER = { paddingTop: 4 }
, S_BTN_DOWN_UP = {
  marginLeft: 16,
  padding: '4 0'
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
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _handlerClickWatch = () => {
    const {
      packageName,
      requestType,
      sumDownloads,
      toDate,
      onWatchItem
    } = this.props
    , _caption = `${packageName} ${sumDownloads}`;

    onWatchItem({
       caption: _caption,
       config: {
          requestType,
          repo: packageName,
          descr: ITEM_DESCRIPTION,
          version: sumDownloads,
          caption: _caption,
          date: toDate
        }
    });
  }

  _handlerClickNodeIco = () => {
    this.setState(prevState => ({
      isLoadNodeIco: true,
      isShowNodeIco: !prevState.isShowNodeIco
    }));
  }

  _toggleByPropName = propName => {
    this.setState(prevState => ({
      [propName]: !prevState[propName]
    }))
  }
  _loadJson = (load, onLoad) => {
    const { packageName } = this.props;
    load({ packageName, onLoad })
  }


 _hClickNpms = () => {
    const { npmsJson } = this.state;
    if (npmsJson) {
      this._toggleByPropName('isShowNmps')
    } else {
      this._loadJson(loadNpms, this._onLoadNpms)
      this.setState({ isLoadingNpms: true })
    }
  }
  _onLoadNpms = (json) => {
    this.setState({
      npmsJson: json,
      isShowNmps: true,
      isLoadingNpms: false
    })
  }

  _hClickBundle = () => {
    const { bundleJson } = this.state;
    if (bundleJson) {
      this._toggleByPropName('isShowBundle')
    } else {
      this._loadJson(loadBundle, this._onLoadBundle)
      this.setState({ isLoadingBundle: true })
    }
  }
  _onLoadBundle = (json) => {
    this.setState({
      bundleJson: json,
      isShowBundle: true,
      isLoadingBundle: false
    })
  }

  render(){
    const {
      packageName,
      caption,
      sumDownloads,
      fromDate,
      toDate,
      labels,
      data,
      packageLink,
      onCloseItem,
      onWatchItem
    } = this.props
    , {
      isShow,
      isMore,
      isButtons,
      isLoadNodeIco,
      isShowNodeIco,
      isLoadingNpms,
      isShowNmps,
      npmsJson,
      isLoadingBundle,
      isShowBundle,
      bundleJson
    } = this.state
    , _lineChartConfig = fLineConfig({ labels, data })
    , _infoStyle = isButtons
          ? {...S_ML_8, ...S_MT_16}
          : S_ML_8;
    return (
      <div style={S_ROOT}>
        <ModalSlider
           isShow={isMore}
           className={CL.MENU_MORE}
           model={this._MORE}
           onClose={this._hToggleMore}
        />
        <Caption
           style={S_CAPTION}
           onClose={onCloseItem}
        >
          <A.SvgMore
            style={S_BT_MORE}
            onClick={this._hClickMore}
          />
          <ButtonPackage
             caption={caption}
             packageName={packageName}
             sumDownloads={sumDownloads}
             fromDate={fromDate}
             toDate={toDate}
             onClick={this._handlerToggleOpen}
          />
          { _isFn(onWatchItem) && <A.ButtonCircle
             style={S_BTN_CIRCLE}
             caption="W"
             title="Add to WatchList"
             onClick={this._handlerClickWatch}
           />}
        </Caption>
        <A.ShowHide
           isShow={isShow}
           style={S_CHART_WRAPPER}
        >
          <LineChart
             data={_lineChartConfig}
             options={CHART_OPTIONS}
          />
          <A.ShowHide isShow={isButtons}>
           <div style={S_ML_16}>
             <a
                target="_blank"
                className={CL.SOURCE_LINK}
                href={packageLink}
             >
                NPM Link
            </a>
             <A.ButtonDownUp
               style={S_BTN_DOWN_UP}
               isUp={isShowNodeIco}
               caption="NodeICO"
               title="Package badge from Nodei.co"
               onClick={this._handlerClickNodeIco}
             />
             <A.ButtonDownUp
               style={S_BTN_DOWN_UP}
               isUp={isShowNmps}
               isLoading={isLoadingNpms}
               caption="NPMS.IO"
               title="Click to load package info from npms.io"
               onClick={this._hClickNpms}
             />
             <A.ButtonDownUp
               style={S_BTN_DOWN_UP}
               isUp={isShowBundle}
               isLoading={isLoadingBundle}
               caption="Bundlephobia.com"
               title="Click to load package info from bundlephobia.com"
               onClick={this._hClickBundle}
             />
           </div>
          </A.ShowHide>

          <div style={_infoStyle}>
            <A.ShowHide isShow={isShowNodeIco} style={S_MB_16}>
              {
                isLoadNodeIco && <A.LinkImg
                  href={packageLink}
                  imgClass="node-ico"
                  imgSrc={`${BASE_NODEICO}${packageName}${SUFFIX_NODEICO}`}
                />
              }
            </A.ShowHide>
            <A.ShowHide isShow={isShowNmps} style={S_MB_16}>
              <PackageDetails json={npmsJson} />
            </A.ShowHide>
            <A.ShowHide isShow={isShowBundle} style={S_MB_16}>
               <BundleInfo json={bundleJson} />
            </A.ShowHide>
          </div>

        </A.ShowHide>
      </div>
    );
  }
}

export default NpmDownloads
