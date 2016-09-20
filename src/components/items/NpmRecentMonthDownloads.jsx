import React from 'react'

import Chart from '../charts/Chart';

import ButtonCircle from '../zhnAtoms/ButtonCircle';
import SvgClose from '../zhnAtoms/SvgClose';
import ShowHide from '../zhnAtoms/ShowHide';
import LineChart from '../charts/LineChart';
import ButtonDownUp from '../zhnAtoms/ButtonDownUp';
import LinkImg from '../zhnAtoms/LinkImg';

const BASE_NODEICO = "https://nodei.co/npm/"
    , SUFFIX_NODEICO = ".png?downloads=true&downloadRank=true&stars=true"
    , BASE_NPM = "https://www.npmjs.com/package/"
    , ITEM_DESCRIPTION = "Npm Recent Month Downloads";

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
      isLoadNodeIco : false,
      isShowNodeIco : false
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

  _handlerClickNodeIco(){
    this.setState({
      isLoadNodeIco : true,
      isShowNodeIco : !this.state.isShowNodeIco
    });
  },

  _renderButtonWatch(){
    return (
      <ButtonCircle
         caption="W"
         title="Add to Watch"
         style={styles.BTN_CIRCLE}
         onClick={this._handlerClickWatch}
      />
    )
  },

  _renderNodeIcoBadge(packageName){
    const _href = BASE_NPM + packageName
        , _imgSrc = BASE_NODEICO + packageName + SUFFIX_NODEICO
    return (
      <LinkImg
         href={_href}
         imgClass="node-ico"
         imgSrc={_imgSrc}
      />
    );
  },

  render(){
    const {
            packageName, caption, sumDownloads, fromDate, toDate,
            labels, data,
            onCloseItem, onWatchItem
          } = this.props
        , _isButtonWatch = ( typeof onWatchItem === 'function' ) ? true : false
        , _styleCaption = styles.captionSpanOpen
        , { isShow, isLoadNodeIco, isShowNodeIco } = this.state
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

          { _isButtonWatch && this._renderButtonWatch() }

          <SvgClose onClose={onCloseItem} />
        </div>
        <ShowHide isShow={isShow}>
          <LineChart
             data={_lineChartConfig}
          />

          <div style={styles.DIV_NODEICO_BADGE}>
            <ButtonDownUp
               caption="NodeICO"
               title="Package badge from Nodei.co"
               styleRoot={{ paddingTop : '4px', paddingBottom : '4px' }}
               isUp={isShowNodeIco}
               onClick={this._handlerClickNodeIco}
            />
            <ShowHide isShow={isShowNodeIco} style={{ marginTop: '16px' }}>
              {isLoadNodeIco && this._renderNodeIcoBadge(packageName)}
            </ShowHide>
          </div>

        </ShowHide>
      </div>
    );
  }
});

export default NpmRecentDownloads
