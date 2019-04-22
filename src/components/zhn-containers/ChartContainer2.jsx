import React, { Component } from 'react';

//import PropTypes from "prop-types";

import Store from '../../flux/stores/AppStore';
import { ChartActionTypes as CHAT } from '../../flux/actions/ChartActions';
import { ComponentActionTypes as CAT } from '../../flux/actions/ComponentActions';

import CaptionRow from '../zhn-atoms/CaptionRow';
import SvgHrzResize from '../zhn-moleculs/SvgHrzResize';

import ScrollPane from '../zhn-atoms/ScrollPane';

const CL = "show-popup";
const CHILD_MARGIN = 36;

const S = {
  ROOT: {
    position: 'relative',
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    borderRadius: '4px',
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
    paddingRight: '10px'
  }
};

const isInArray = function(arr=[], value){
  const len = arr.length;
  let i=0;
  for (; i<len; i++){
    if (arr[i] === value){
      return true;
    }
  }
  return false;
};

const compActions = [
  CHAT.SHOW_CHART,
  CHAT.LOAD_STOCK_COMPLETED,
  CHAT.CLOSE_CHART
];

class ChartContainer2 extends Component {
  /*
  static propTypes = {
    caption: PropTypes.string,
    browserType: PropTypes.string,
    chartType: PropTypes.string,
    onCloseContainer: PropTypes.func
  }
  */
   childMargin = CHILD_MARGIN
   state = {}

   componentWillMount(){
     this.unsubscribe = Store.listen(this._onStore);
     this.setState(Store.getConfigs(this.props.chartType));
   }
   componentWillUnmount(){
     this.unsubscribe();
   }

   _onStore = (actionType, data) => {
      if (isInArray(compActions, actionType)) {
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

   _handleHide = () => {
      const { chartType, browserType, onCloseContainer } = this.props;
      onCloseContainer(chartType, browserType);
      this.setState({ isShow: false });
   }

   _refScroll = c => this._scrollComp = c

   render(){
    const  { caption } = this.props
         , { isShow, configs } = this.state
         , _styleOpen = isShow ? S.BLOCK : S.NONE
         , _classOpen = isShow ? CL : undefined;
     return(
        <div
           className={_classOpen}
           style={{ ...S.ROOT, ..._styleOpen }}
        >
          <CaptionRow
             caption={caption}
             onClose={this._handleHide}
          >
            <SvgHrzResize
              minWidth={500}
              maxWidth={1200}
              comp={this}
            />
          </CaptionRow>

          <ScrollPane
            ref={this._refScroll}
            style={S.SCROLL}
          >
            {configs}
          </ScrollPane>

        </div>
     )
   }
}

export default ChartContainer2
