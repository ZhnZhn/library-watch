import React from 'react'

import Chart from '../charts/Chart';

import ButtonCircle from '../zhnAtoms/ButtonCircle';
import SvgClose from '../zhnAtoms/SvgClose';
import ShowHide from '../zhnAtoms/ShowHide';
import LineChart from '../charts/LineChart';

const BASE_NODEICO = "https://nodei.co/npm/";
const BASE_NPM = "https://www.npmjs.com/package/"
const ITEM_DESCRIPTION = "Npm Recent Month Downloads";

const styles = {
  rootDiv : {
    lineHeight : 1.5,
    marginBottom: '10px',
    marginRight: '25px',
    //marginRight: '10px',
    position : 'relative'
  },
  headerDiv: {
    backgroundColor: '#232F3B',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    paddingTop: '4px',
    paddingLeft: '10px',
    lineHeight: 1.5,
    //height: '25px',
    //width: '600px'
    width : '100%',
    height: '30px'
  },
  captionSpanOpen : {
    display : 'inline-block',
    color: 'rgba(164, 135, 212, 1)',
    cursor: 'pointer',
    maxWidth: '500px',
    fontWeight : 'bold',
    whiteSpace: 'nowrap',
    textOverflow : 'ellipsis',
    overflow : 'hidden',
    float : 'left'
  },

  SPAN_SUM : {
    color: '#80c040',
    paddingLeft : '10px',
    paddingRight : '10px'
  },
  SPAN_START : {
    paddingRight : '10px'
  },
  BTN_CIRCLE : {
    marginLeft: '10px'
  },

  DIV_NODEICO_BADGE : {
     marginLeft: '32px'
  },
  SPAN_NODEICO : {
    display: 'block',
    fontWeight: 'bold' ,
    color: '#3399FF',
    cursor: 'pointer'
  }

}


const NpmRecentDownloads = React.createClass({
  getInitialState(){
    return {
      isShow : true,
      isLoadNodeICO : false,
      isShowNodeICO : false
    }
  },

  _handlerToggleOpen(){
    this.setState({ isShow : !this.state.isShow });
  },
  _handlerClickWatch(){
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
  },

  _handlerClickNodeICO(){
    this.setState({
      isLoadNodeICO : true,
      isShowNodeICO : !this.state.isShowNodeICO
    });
  },

  _renderNodeICO(packageName){
    const { isShowNodeICO } = this.state
        , _style = (isShowNodeICO)
             ? { display : 'block' }
             : { display : 'none' };
    return (
      <a
        style={_style}
        href={BASE_NPM + packageName}
      >
         <img src={BASE_NODEICO + packageName + '.png?downloads=true&downloadRank=true&stars=true'} />
      </a>
    )
  },

  render(){
    const {
            packageName, caption, sumDownloads, fromDate, toDate,
            labels, data,
            onCloseItem
          } = this.props
        , _styleCaption = styles.captionSpanOpen
        , { isShow, isLoadNodeICO } = this.state
        , _lineChartConfig = Chart.fLineConfig({ labels, data })
    return (
      <div style={styles.rootDiv}>
        <div style={styles.headerDiv}>
          <span
             className="not-selected"
             title={caption}
             style={_styleCaption}
             onClick={this._handlerToggleOpen}
          >
            <span>
              {packageName}
            </span>
            <span style={styles.SPAN_SUM}>
               {sumDownloads}
            </span>
            <span style={styles.SPAN_START}>
              {fromDate}
            </span>
            <span>
              {toDate}
            </span>
          </span>
          <ButtonCircle
             caption="W"
             title="Add to Watch"
             style={styles.BTN_CIRCLE}
             onClick={this._handlerClickWatch}
          />
          <SvgClose onClose={onCloseItem} />
        </div>
        <ShowHide isShow={isShow}>
          <LineChart
             data={_lineChartConfig}
          />

          <div style={styles.DIV_NODEICO_BADGE}>
            <span               
               style={styles.SPAN_NODEICO}
               onClick={this._handlerClickNodeICO}
            >
              NodeICO
            </span>
            {isLoadNodeICO && this._renderNodeICO(packageName)}
          </div>

        </ShowHide>
      </div>
    );
  }
});

export default NpmRecentDownloads
