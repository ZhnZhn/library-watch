import React from 'react';

import Store from '../../flux/stores/AppStore';
import { ChartActionTypes } from '../../flux/actions/ChartActions';
import { ComponentActionTypes } from '../../flux/actions/ComponentActions';

import CaptionRow from '../zhnAtoms/CaptionRow';
import SvgHrzResize from '../zhnMoleculs/SvgHrzResize';

import ScrollPane from '../zhnAtoms/ScrollPane';

const CHILD_MARGIN = 36;

const styles = {
  rootDiv : {
    backgroundColor: '#4D4D4D',
    paddingTop : '5px',
    paddingLeft : '5px',
    borderRadius: '10px',
    border: 'solid 3px #232F3B',
    position: 'relative',
    width: '635px',
    /* eslint-disable no-dupe-keys */
    height: '730px',
    height: 'calc(100vh - 71px)',
    /* eslint-enable no-dupe-keys */
    overflowY: 'hidden',
    marginLeft: '10px',
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

const ChartContainer2 = React.createClass({
  getInitialState(){
    this.childMargin = CHILD_MARGIN;
    return {};
  },

   componentWillMount(){
     this.unsubscribe = Store.listen(this._onStore);
     this.setState(Store.getConfigs(this.props.chartType));
   },
   componentWillUnmount(){
     this.unsubscribe();
   },

   _onStore(actionType, data){
      if (isInArray(compActions, actionType)) {
        if (data && data.chartType === this.props.chartType){
          this.setState(data);
        }
      } else if (actionType === ComponentActionTypes.CLOSE_CHART_CONTAINER_2){
         if (data === this.props.chartType){
           this._handleHide();
         }
      }
   },

   _handleHide(){
      const { chartType, browserType, onCloseContainer } = this.props;
      onCloseContainer(chartType, browserType);
      this.setState({isShow: false});
   },


   _renderCharts(){
      return this.state.configs.map((item, index) => {
        return item;
      })
   },

   render(){
    const  { caption } = this.props
         , { isShow } = this.state
         , _styleOpen = (isShow) ? {display: 'inline-block'} : {display: 'none'}
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
})

export default ChartContainer2;
