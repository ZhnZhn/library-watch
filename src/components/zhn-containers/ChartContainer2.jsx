import React, { Component } from 'react';
//import PropTypes from "prop-types";

import Store from '../../flux/stores/AppStore';
import { ChartActionTypes as CHAT } from '../../flux/actions/ChartActions';
import { ComponentActionTypes as CAT } from '../../flux/actions/ComponentActions';

import ModalSlider from '../zhn-modal-slider/ModalSlider'
import crModelMore from './ModelMore'
import ContainerCaption from '../zhn-atoms/ContainerCaption';
import SvgHrzResize from '../zhn-moleculs/SvgHrzResize';
import ScrollPane from '../zhn-atoms/ScrollPane';
import CL from '../styles/CL';

const CHILD_MARGIN = 36
, RESIZE_INIT_WIDTH = 635
, RESIZE_MIN_WIDTH = 375
, RESIZE_MAX_WIDTH = 1200
, DELTA = 10;

const S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#4d4d4d',
    padding: '0px 0px 16px',
    width: 635,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    borderRadius: 4,
    boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.6)',
    overflowY: 'hidden',
    overflowX : 'hidden'
  },
  BLOCK: {
    display: 'inline-block'
  },
  NONE: {
    display: 'none'
  },
  SCROLL: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  BT_MORE: {
    position: 'relative',
    top: 3,
    marginRight: 6
  }
};

const _isInArray = (arr=[], value) => Boolean(~arr.indexOf(value));

const COMP_ACTIONS = [
  CHAT.SHOW_CHART,
  CHAT.LOAD_STOCK_COMPLETED,
  CHAT.CLOSE_CHART
];

const _getWidth = style => parseInt(style.width, 10)
  || RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';

class ChartContainer2 extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string,
    browserType: PropTypes.string,
    chartType: PropTypes.string,
    onCloseContainer: PropTypes.func
  }
  */
   constructor(props){
     super(props)
     const { chartType, onRemoveAll } = props;
     this.childMargin = CHILD_MARGIN
     this._MORE = crModelMore({
       chartType,
       onMinWidth: this._resizeTo.bind(this, RESIZE_MIN_WIDTH),
       onInitialWidth: this._resizeTo.bind(this, RESIZE_INIT_WIDTH),
       onPlusWidth: this._plusToWidth,
       onMinusWidth: this._minusToWidth,
       onRemoveAll
     })
     this.state = {
       isMore: false
     }
   }

   componentDidMount(){
     this.unsubscribe = Store.listen(this._onStore);
     this.setState(Store.getConfigs(this.props.chartType));
   }
   componentWillUnmount(){
     this.unsubscribe();
   }

   _onStore = (actionType, data) => {
      if (_isInArray(COMP_ACTIONS, actionType)) {
        if (data && data.chartType === this.props.chartType){
          if (this._scrollComp) {
            this._scrollComp.scrollTop()
          }
          this.setState(data);
        }
      } else if (actionType === CAT.CLOSE_CHART_CONTAINER_2){
         if (data === this.props.chartType){
           this._handleHide();
         }
      }
   }

   _getRootNodeStyle = () => {
     const { _rootNode } = this
     , { style={} } = _rootNode || {};
     return style;
   }

   _resizeTo = (width) => {
     this._getRootNodeStyle().width = _toStyleWidth(width)
   }

   _plusToWidth = () => {
     const style = this._getRootNodeStyle()
     , w = _getWidth(style) + DELTA;
     if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w)
     }
   }
   _minusToWidth = () => {
     const style = this._getRootNodeStyle()
     , w = _getWidth(style) - DELTA;
     if (w > RESIZE_MIN_WIDTH) {
       style.width = _toStyleWidth(w)
     }
   }

   _showMore = () => {
      this.setState({ isMore: true })
   }
   _hToggleMore = () => {
     this.setState(prevState => ({
       isMore: !prevState.isMore
     }))
   }

   _handleHide = () => {
      const { chartType, browserType, onCloseContainer } = this.props;
      onCloseContainer(chartType, browserType);
      this.setState({ isShow: false });
   }

   _refRootNode = node => this._rootNode = node
   _refScroll = c => this._scrollComp = c

   render(){
    const  { caption } = this.props
     , { isShow, isMore, configs } = this.state
     , _styleOpen = isShow ? S.BLOCK : S.NONE
     , _classOpen = isShow ? CL.SHOW_POPUP : undefined;
     return(
        <div
           ref={this._refRootNode}
           className={_classOpen}
           style={{ ...S.ROOT, ..._styleOpen }}
        >
          <ModalSlider
            isShow={isMore}
            className={CL.MENU_MORE}
            model={this._MORE}
            onClose={this._hToggleMore}
          />
          <ContainerCaption
             moreStyle={S.BT_MORE}
             caption={caption}
             onMore={this._showMore}
             onClose={this._handleHide}
          >
            <SvgHrzResize
              minWidth={RESIZE_MIN_WIDTH}
              maxWidth={RESIZE_MAX_WIDTH}
              comp={this}
            />
          </ContainerCaption>
          <ScrollPane
            ref={this._refScroll}
            style={S.SCROLL}
          >
            <div>
              {configs}
            </div>
          </ScrollPane>
        </div>
     );
   }
}

export default ChartContainer2
