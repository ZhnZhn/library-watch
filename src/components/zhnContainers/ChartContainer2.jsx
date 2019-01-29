import React, { Component } from 'react';

//import PropTypes from "prop-types";

import Store from '../../flux/stores/AppStore';
import { ChartActionTypes } from '../../flux/actions/ChartActions';
import { ComponentActionTypes } from '../../flux/actions/ComponentActions';

import CaptionRow from '../zhnAtoms/CaptionRow';
import SvgHrzResize from '../zhnMoleculs/SvgHrzResize';

import ScrollPane from '../zhnAtoms/ScrollPane';

const CHILD_MARGIN = 36;

const styles = {
  rootDiv : {
    position: 'relative',
    backgroundColor: '#4D4D4D',
    padding: '0px 0px 3px 0px',
    //paddingTop : '5px',
    //paddingLeft : '5px',
    //border: 'solid 3px #232F3B',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    borderRadius: '4px',
    boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.6)',
    overflowY: 'hidden',
    overflowX : 'hidden'
  },
  hrzResize : {
    position : 'absolute',
    top : '30px',
    right: '0'
  },
  scrollDiv : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  chartDiv : {
    overflowY: 'auto',
    height : '680px'
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
  ChartActionTypes.SHOW_CHART,
  ChartActionTypes.LOAD_STOCK_COMPLETED,
  ChartActionTypes.CLOSE_CHART
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

  constructor(props){
    super()
    this.childMargin = CHILD_MARGIN
    this.state = {}
  }

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
          this.setState(data);
        }
      } else if (actionType === ComponentActionTypes.CLOSE_CHART_CONTAINER_2){
         if (data === this.props.chartType){
           this._handleHide();
         }
      }
   }

   _handleHide = () => {
      const { chartType, browserType, onCloseContainer } = this.props;
      onCloseContainer(chartType, browserType);
      this.setState({isShow: false});
   }


   _renderCharts = () => {
      return this.state.configs.map((item, index) => {
        return item;
      })
   }

   render(){
    const  { caption } = this.props
         , { isShow } = this.state
         , _styleOpen = (isShow)
               ? {display: 'inline-block'}
               : {display: 'none'}
         , _classOpen = (isShow) ? "show-popup" : undefined;

     return(
        <div
           className={_classOpen}
           style={Object.assign({},styles.rootDiv, _styleOpen)}
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

          <ScrollPane style={styles.scrollDiv}>
              {this._renderCharts()}
          </ScrollPane>

        </div>
     )
   }
}

export default ChartContainer2
