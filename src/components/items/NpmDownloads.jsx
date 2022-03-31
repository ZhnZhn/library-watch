import { Component } from 'react'

import { fLineConfig } from '../charts/ChartConfigFactories'

import crModelMore from './crNpmModelMore'

import A from '../zhn-atoms/A'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import LineChart from '../charts/LineChart'
import ButtonPackage from './ButtonPackage';
import ButtonWatch from './ButtonWatch';
import Caption from './ItemCaption'
import NpmPackageInfo from './NpmPackageInfo'

import CL from '../styles/CL'
import STYLE from './Item.Style'

const ITEM_DESCRIPTION = "Npm Recent Month Downloads"

, S_ROOT = STYLE.ROOT
, S_BT_MORE = STYLE.BT_MORE
, S_CAPTION = { paddingLeft: 4 }
, S_CHART_WRAPPER = { paddingTop: 4 }

, CHART_OPTIONS = {
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
      isButtons: true
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

  _hClickWatch = () => {
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
    } = this.state
    , _lineChartConfig = fLineConfig({ labels, data })

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
          { _isFn(onWatchItem) && <ButtonWatch
              onClick={this._hClickWatch}
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
          <NpmPackageInfo
            isButtons={isButtons}
            packageName={packageName}
            packageLink={packageLink}
          />
        </A.ShowHide>
      </div>
    );
  }
}

export default NpmDownloads
